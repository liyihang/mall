<?php
namespace Admin\Controller;

use Think\Controller;

class GoodsController extends Controller
{
    public function index()
    {
        $this->display('product-list');

    }

    public function add()
    {
        $this->display('product-add');

    }
    public function insert(){
        $m = D('Goods');
        if($m->create()){
            $m->add();
            $this->success("添加成功",U('lst'));

        }else{
            $error = $m->getError();
            $this->error($error);

        }
    }
}