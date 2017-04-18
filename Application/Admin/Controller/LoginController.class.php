<?php
/**
 * Created by www.itcast.cn.
 * User: lcc
 * Date: 2017/4/17
 * Time: 11:40
 */

namespace Admin\Controller;
use Think\Controller;

class LoginController extends Controller
{

    public function captcha()
    {
        $config =    array(
            'fontSize'    =>    30,    // 验证码字体大小
            'length'      =>    3,     // 验证码位数
            'useNoise'    =>    false, // 关闭验证码杂点
        );
        $Verify = new \Think\Verify($config);
        $Verify->entry();
    }
    public function singin()
    {
        $m = D('Admin');
        if ($m->create())
        {
            try
            {
                $m->login();
                $this->success("登录成功",U('Index/index'));
            }
            catch (\Exception $exception) {
                $this->error($exception->getMessage());
            }
        }
        else
        {
            $e = $m->getError();
            $this->error($e);
        }
    }

}