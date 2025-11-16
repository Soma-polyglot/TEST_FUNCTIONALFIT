// ===== 認証設定 =====
const AUTH_CREDENTIALS = {
  username: 'admin',
  password: 'test01'
};

// ===== モーダル作成（DOM準備を待つ） =====
function createAuthModal() {
  if (document.getElementById('auth-modal')) return;

  const modalHTML = `
    <div id="auth-modal" aria-hidden="true">
      <div class="auth-form">
        <h2>認証が必要です</h2>
        <form id="auth-form" autocomplete="off">
          <input type="text" id="username" placeholder="ユーザーID" required autocomplete="username">
          <input type="password" id="password" placeholder="パスワード" required autocomplete="current-password">
          <button type="submit">ログイン</button>
          <div class="auth-error" id="auth-error">IDまたはパスワードが間違っています</div>
        </form>
      </div>
    </div>
    <style>
      #auth-modal { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,1); z-index:10000; align-items:center; justify-content:center; }
      #auth-modal.show { display:flex; }
      .auth-form { background:white; padding:30px; border-radius:8px; max-width:400px; width:90%; text-align:center; box-shadow:0 4px 20px rgba(0,0,0,0.3); }
      .auth-form input, .auth-form button { width:100%; padding:12px; margin:8px 0; box-sizing:border-box; }
      .auth-error{color:#d32f2f; display:none; margin-top:8px;}
    </style>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// ===== 認証チェック =====
function checkAuthentication() {
  const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
  const authModal = document.getElementById('auth-modal');
  const siteContent = document.querySelector('.site-content');

  if (isAuthenticated) {
    if (authModal) {
      authModal.classList.remove('show');
      authModal.setAttribute('aria-hidden', 'true');
    }
    if (siteContent) siteContent.style.display = ''; // CSSのデフォルトに戻す（indexの display:none を解除）
    return true;
  } else {
    if (authModal) {
      authModal.classList.add('show');
      authModal.setAttribute('aria-hidden', 'false');
      // フォーカスセット（ユーザー利便性）
      const u = document.getElementById('username');
      if (u) u.focus();
    }
    if (siteContent) siteContent.style.display = 'none';
    return false;
  }
}

// ===== 認証処理 =====
function authenticate(username, password) {
  if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
    sessionStorage.setItem('authenticated', 'true');
    return true;
  }
  return false;
}

// ===== 初期化 =====
function initAuth() {
  try {
    createAuthModal();
    checkAuthentication();

    const authForm = document.getElementById('auth-form');
    const authError = document.getElementById('auth-error');

    if (authForm) {
      authForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (authenticate(username, password)) {
          if (authError) authError.style.display = 'none';
          checkAuthentication();
          authForm.reset();
        } else {
          if (authError) authError.style.display = 'block';
          const pw = document.getElementById('password');
          if (pw) pw.value = '';
          const u = document.getElementById('username');
          if (u) u.focus();
        }
      });
    } else {
      // 開発時のデバッグ用
      // console.warn('認証フォームが見つかりません。createAuthModalが正常に動作しているか確認してください。');
    }
  } catch (err) {
    console.error('auth.js 初期化エラー:', err);
  }
}

// DOMが準備できたら初期化（どの位置にスクリプトを置いても安全）
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAuth);
} else {
  initAuth();
}
