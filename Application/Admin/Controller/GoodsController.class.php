<?php
namespace Admin\Controller;




class GoodsController extends BaseController
{
    public function index()
    {
        $m = D('Goods');
        $count = $m->count();
        $data = $m->select();
        $this->assign('data', $data);
        $this->assign('count', $count);
        $this->display('product-list');

    }

    public function update()
    {
        $m = D('Goods');

        if ($m->create()) {


            $upload = new \Think\Upload();// 实例化上传类
            $upload->maxSize = 3145728;// 设置附件上传大小
            $upload->exts = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
            $upload->rootPath = './Public/Uploads/'; // 设置附件上传根目录
            $upload->savePath = 'Goods/'; // 设置附件上传（子）目录
            // 上传文件
            $info = $upload->upload();

            if ($info) {


                // 上传成功,
                //获取上传的图片的标记id
                $gids = array_keys($info);
                foreach ($gids as $gid) {
                    $goods_img = $info[$gid]['savepath'] . $info[$gid]['savename'];
                    $goods_thums = $info[$gid]['savepath'] . "thump_" . $info[$gid]['savename'];
                    $img = new \Think\Image();
                    $img->open($upload->rootPath . $goods_img);
                    // 生成一个固定大小为150*150的缩略图并保存为thumb.jpg
                    $img->thumb(350, 350, \Think\Image::IMAGE_THUMB_FIXED)->text('lidoudou', './Public/fonts/msyh.ttf', 20, "#FFF71A")->save($upload->rootPath . $goods_thums);

                    $m->goods_img = $goods_img;
                    $m->goods_thums = $goods_thums;

                    unlink('./mall/Public/Uploads/' . I('post.goods_img'));
                    unlink('./mall/Public/Uploads/' . I('post.goods_thums'));



                }

            }
            $m->save();
            $this->success("修改成功", U('Goods/index'));

        } else {
            $error = $m->getError();
            $this->error($error);

        }
    }

    public function add()
    {
        $this->display('product-add');

    }

    public function edit()
    {
        $id = I('get.id');

        $m = D('Goods');
        $data = $m->find($id);

        $this->assign('data', $data);
        $this->display('product-edit');
    }

    public function insert()
    {
        $m = D('Goods');

        if ($m->create()) {


            $upload = new \Think\Upload();// 实例化上传类
            $upload->maxSize = 3145728;// 设置附件上传大小
            $upload->exts = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
            $upload->rootPath = './Public/Uploads/'; // 设置附件上传根目录
            $upload->savePath = 'Goods/'; // 设置附件上传（子）目录
            // 上传文件
            $info = $upload->upload();
            if (!$info) {// 上传错误提示错误信息
                $this->error($upload->getError());
            } else {// 上传成功,
                //获取上传的图片的标记id
                $gids = array_keys($info);
                foreach ($gids as $gid) {
                    $goods_img = $info[$gid]['savepath'] . $info[$gid]['savename'];
                    $goods_thums = $info[$gid]['savepath'] . "thump_" . $info[$gid]['savename'];
                    $img = new \Think\Image();
                    $img->open($upload->rootPath . $goods_img);
                    // 生成一个固定大小为150*150的缩略图并保存为thumb.jpg
                    $img->thumb(350, 350, \Think\Image::IMAGE_THUMB_FIXED)->text('lidoudou', './Public/fonts/msyh.ttf', 20, "#FFF71A")->save($upload->rootPath . $goods_thums);

                    $m->goods_img .= $goods_img;
                    $m->goods_thums .= $goods_thums;
                }

            }
            $m->add();
            $this->success("添加成功", U('Goods/index'));

        } else {
            $error = $m->getError();
            $this->error($error);

        }
    }

    public function del()
    {
        $id = I('post.id');
        $m = D('Goods');
        $rst = $m->delete($id);
        if($rst){
            echo json_encode(array(
                "status"=>$id,
                "msg"=>"删除成功"
            ));
        }else{
            echo json_encode(array(
                'status'=>$id,
                'msg'=>"删除失败"
            ));
        }

    }
}

