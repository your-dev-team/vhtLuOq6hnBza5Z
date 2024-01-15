# コア構造

## ファイル構成
- server.js: アプリケーションのエントリーポイント。Expressサーバーをセットアップします。
- routes.js: Expressのルーティングを管理します。
- timerController.js: タイマー機能を制御するコントローラ。
- views: 
  - index.ejs: メインとなるHTMLページ。ユーザーが時間を設定し、タイマーを開始できるインターフェースが含まれます。
- public:
  - css:
    - style.css: 全体のスタイルを定義します。
  - js:
    - main.js: クライアントサイドのJavaScript。タイマーの設定、開始、アラートの表示などを制御します。
- Dockerfile: Dockerイメージをビルドするための設定ファイル。
- docker-compose.yml: Dockerコンテナの設定と起動を管理します。

## 主要なクラスと関数
- timerController.js:
  - `setTimer(req, res)`: ユーザーからのリクエストに基づいてタイマーを設定します。
  - `startTimer(req, res)`: タイマーを開始します。
  - `endTimer(req, res)`: タイマーを終了し、終了通知を送信します。
- main.js:
  - `setTimer()`: ユーザーの入力に基づいてタイマーを設定します。
  - `startTimer()`: タイマーを開始します。JavaScriptの組み込み関数setIntervalを使用します。
  - `endTimer()`: タイマーを終了します。JavaScriptの組み込み関数alertを使用してユーザーに通知します。
