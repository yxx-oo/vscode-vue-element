/**
 * @Author: Sun Rising
 * @Date: 2021-01-01 22:06:37
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2021-01-27 16:49:05
 * @Description:创建查询页面
 */
import * as vscode from 'vscode';
import { resolveHandle } from '../../lib/messageResolve';
import { GlobalStore } from '../../store/GlobalStore';

import ReusedWebviewPanel from './ReusedWebviewPanel';
import axios from 'axios'
import { getWebViewContent, formatHTMLWebviewResourcesUrl } from '../../utils';


// 处理器
async function handle(agrs: any, command: string) {
    // 创建webview
    const panel = ReusedWebviewPanel.create(
        'testWebview', // viewType
        "WebView演示", // 视图标题
        vscode.ViewColumn.One, // 显示在编辑器的哪个部位
        {
            enableScripts: true, // 启用JS，默认禁用
            retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
        }
    );
    panel.webview.html = getWebViewContent(GlobalStore.getStore().getExtensionContext(), 'media/page1/index.html');
    panel.webview.onDidReceiveMessage(msg => resolveHandle(msg, panel), undefined, GlobalStore.getStore().getExtensionContext().subscriptions);
}
// 处理器
async function handleUrl(agrs: any, command: string) {
    // 创建webview
    const panel = vscode.window.createWebviewPanel(
        'testWebview', // viewType
        "WebView演示", // 视图标题
        vscode.ViewColumn.One, // 显示在编辑器的哪个部位
        {
            enableScripts: true, // 启用JS，默认禁用
            retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
        }
    );
    const DEV_URL = 'http://localhost:9527/';
    axios
      .get(DEV_URL)
      .then((res) => {
        const html = res.data;
        panel.webview.html = formatHTMLWebviewResourcesUrl(html, (link) => {
          return DEV_URL + link;
        });
        
        // panel.webview.html = getWebViewContent(GlobalStore.getStore().getExtensionContext(), 'media/page1/index.html');
      })
      .catch(() => {
        // window.showErrorMessage('[开发] 获取 http://localhost:3030/ 失败，请先启动服务');
      });
    
    // panel.webview.onDidReceiveMessage(msg => resolveHandle(msg, panel), undefined, GlobalStore.getStore().getExtensionContext().subscriptions);
}
export { handle as CreatePageHandle }