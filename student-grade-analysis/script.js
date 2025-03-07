// script.js

// 登录表单提交事件
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('请输入用户名和密码！');
        return;
    }

    alert('登录成功！');
});

// 注册表单提交事件
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;

    if (!username || !password || !confirmPassword || !email) {
        alert('请填写所有必填项！');
        return;
    }

    if (password !== confirmPassword) {
        alert('两次输入的密码不一致！');
        return;
    }

    alert('注册成功！请登录。');
});

// 跳转到注册页面
document.getElementById('registerButton')?.addEventListener('click', function() {
    window.location.href = 'register.html';
});

// 跳转到登录页面
document.getElementById('loginButton')?.addEventListener('click', function() {
    window.location.href = 'login.html';
});
