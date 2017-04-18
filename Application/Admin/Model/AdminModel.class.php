<?php

/**
 * Created by www.itcast.cn.
 * User: lcc
 * Date: 2017-02-24
 * Time: 14:56
 */
namespace Admin\Model;

use Think\Model;
use Think\Exception;

class AdminModel extends Model
{

    protected $_validate = [
        ['captcha', 'require', "验证码不能为空!", 1],
        ['captcha', 'chkcaptcha', "验证码不正确!",1, 'callback'],
        ['username', 'require', "用户名不能为空!", 1],
        ['password', 'require', "密码不能为空!", 1],


    ];

    public function chkcaptcha($data)
    {
        $verify = new \Think\Verify();
        return $verify->check($data);
    }

    public function login()
    {

        $username = I('post.username');
        $password = I('post.password');
        $info = $this->where([
            "username" => $username
        ])->find();
        if ($info)
        {
            if ($info['password'] == md5($password))
            {
                session('id',$info['id']);
                session('username',$info['username']);
            }
            else
            {
                throw_exception("用户名或者密码不正确！");
            }
        }
        else
        {
          throw_exception("用户名不存在");
        }
    }
}