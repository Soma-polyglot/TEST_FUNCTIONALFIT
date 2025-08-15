<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'LAA0727897-fu5nkp');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'LAA0727897');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'qgCZVEMQ');

/** MySQL のホスト名 */
define('DB_HOST', 'mysql142.phy.lolipop.lan');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '8YCkVpl]x:acq~n??ZsNQ)ye{C8bR&s&{tS#u54P@4.QtwJnsOG}wnVhc)#v69/x');
define('SECURE_AUTH_KEY', '02BfA(GutJREn=]!/V7dEw;46ZyuUx2qf_[rq|m0Ie#ObKDzi]=6&!:IXv0uxe[7');
define('LOGGED_IN_KEY', 'vM{FQ=I*]BH`K3]lW/#+mZU?9+mYS7T}W6p]oLYSNZl0@mDieQjPlqVU<cF@=o85');
define('NONCE_KEY', '=ymWLX{PDy$OyUe5p<*)>?#U,c1kY7COEUhZed)w5hy"ekF<#<SMyC.o1Y$i5CqL');
define('AUTH_SALT', 'SBSpI&-rDc^9heWl7h}uYYFR$OgBBCGDlmRo.FKV[.ezK,#2"m?v6D-HMc{~!%b8');
define('SECURE_AUTH_SALT', '_s1PkPM{}`gp["wfoxlu>Qo$)=]ID(opDnnoJa+u;9220Cc0g`*`e]eBvLagIVqN');
define('LOGGED_IN_SALT', 'iB#S@hiei8>yE9^w*m*GNU]xJ!F{byi%9nD6"&pqs4-^+12+lPc01GXKH*xC<u5_');
define('NONCE_SALT', 'wm&Zez?;!AZ$mfy)L@G,?=&rML-Xako}alTVj9T%@z,j(bAGE"IE3&/a5Br))i|M');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp1_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
  define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
