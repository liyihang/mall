<?php
namespace Admin\Controller;
use Think\Controller;
class GoodsController extends Controller {
    public function index(){
        $this->display('product-list');

    }
    public function add(){
        $this->display('product-add');
    }
}