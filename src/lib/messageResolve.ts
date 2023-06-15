import { WebviewPanel } from "vscode";
import * as vscode from 'vscode'
import axios from "axios";
/**
 * @Author: Sun Rising
 * @Date: 2021-01-20 15:32:46
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2021-01-27 16:41:06
 * @Description: webview消息解析
 */
export interface webviewMsg {
    // 信息唯一标识
    token: string,
    // 执行类别
    command: string,
    // 携带信息
    data: any
}

/**
 * webview消息解析
 * @param message 信息
 */
export async function resolveHandle(message: webviewMsg, panel: WebviewPanel) {
    console.log("接收到webview信息", message);
    if (message.command == "getCurrInterface") {
        panel.webview.postMessage(Object.assign(message, { command: "reject", data: "未选择保存路径，取消生成" }));
        return
    }
    if (message.command == "saveQueryPageFile") {
        panel.webview.postMessage(Object.assign(message, { data: "ok" }));
        return
    }
    if (message.command == "saveTypingFile") {
        panel.webview.postMessage(Object.assign(message, { data: "ok67676767676" }));
        return
    }
    if (message.command == "saveEditPageFile") {
        panel.webview.postMessage(Object.assign(message, { data: "ok" }));
        return
    }
    if (message.command == "getSettingConfig") {
        let config = vscode.workspace.getConfiguration();
        let value = config.get('vscode-vue-element-demo.textTest');
        let _value = value === undefined ? "" : value;
        axios
            .get(`http://10.22.110.27:12023/mesh/alive`)
            .then((response) => {
                console.log(response,1122222)
            })
            .catch((err) => console.log(err));

        console.log(_value, 888888999)
        panel.webview.postMessage(Object.assign(message, { data: _value }));
        return
    }
    if (message.command == "updateSettingConfig") {
        let config = vscode.workspace.getConfiguration();
        config.update("vscode-vue-element-demo.textTest", 'djkashdkhas', true)
        panel.webview.postMessage(Object.assign(message, { data: "ok" }));
        return
    }



}