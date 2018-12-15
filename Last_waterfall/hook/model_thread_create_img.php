<?php exit;

/**
 * 生成缩略图函数（支持图片格式：gif、jpeg、png和bmp）
 * @author ruxing.li
 * @param  string $src      源图片路径
 * @param  int    $width    缩略图宽度（只指定高度时进行等比缩放）
 * @param  int    $width    缩略图高度（只指定宽度时进行等比缩放）
 * @param  string $filename 保存路径（不指定时直接输出到浏览器）
 * @return bool
**/

function mkThumbnail($src, $width = null, $height = null, $filename = null) {
    if (!isset($width) && !isset($height))
        return false;
    if (isset($width) && $width <= 0)
        return false;

    $size = getimagesize($src);
    if (!$size)
        return false;

    list($src_w, $src_h, $src_type) = $size;

    if (isset($height) && $height <= 0){
        $height = ($width / $src_w) * $src_h;
    }
    //return false;

    $src_mime = $size['mime'];
    switch($src_type) {
        case 1 :
            $img_type = 'gif';
            break;
        case 2 :
            $img_type = 'jpeg';
            break;
        case 3 :
            $img_type = 'png';
            break;
        case 15 :
            $img_type = 'wbmp';
            break;
        default :
            return false;
    }

    if (!isset($width))
        $width = $src_w * ($height / $src_h);
    if (!isset($height))
        $height = $src_h * ($width / $src_w);

    $imagecreatefunc = 'imagecreatefrom' . $img_type;
    $src_img = $imagecreatefunc($src);
    $dest_img = imagecreatetruecolor($width, $height);
    imagecopyresampled($dest_img, $src_img, 0, 0, 0, 0, $width, $height, $src_w, $src_h);

    $imagefunc = 'image' . $img_type;
    if ($filename) {
        $imagefunc($dest_img, $filename);
    } else {
        header('Content-Type: ' . $src_mime);
        $imagefunc($dest_img);
    }
    imagedestroy($src_img);
    imagedestroy($dest_img);
    return true;
}

$avatar_type= 1; // =0 不缩放(不建议)，=1按宽度缩放， =2按高度缩放，=3按宽高拉伸，=4按宽高从中间缩放裁剪
$avatar_h=200;
$avatar_w=300;
$avatar_q=70; // 压缩质量
$avatar_num=3; //处理图片数

$pattern="/\!\[*?\]\((.*?(?:[\.gif|\.jpg|\.png]))\)/";
/**$pattern="/<[img|IMG].*?src=[\'|\"](.*?(?:[\.gif|\.jpg|\.png]))[\'|\"].*?[\/]?>/";**/ 
$imgallcount=preg_match_all($pattern, $message ,$match);

$imgs=array();
$shownum=1;
$imgcount=0;

// 区分小文件和远程链接
for($i=0;$i<$imgallcount;$i++){
    if(!empty($match[0][$i])){
        if(strstr($match[1][$i],'http://')||strstr($match[1][$i],'https://')||strstr($match[1][$i],'ftp://')){
            if($show_upimgonly) $picsize=0;
            else $picsize=10001;
        }else{
            $match[1][$i]=APP_PATH.$match[1][$i];
            $picsize = filesize($match[1][$i]);
        }
        if($picsize>10000) {        //小于10K的忽略
            $imgs[]=$match[1][$i];
            $imgcount=$imgcount+1;
        }
    }
}

for($i=0;$i<$imgcount;$i++){
    $tempaddr=$imgs[$i];
    $ptm = $conf['upload_path'].'preview/'.$tid.'.png';
        $ppt = mkThumbnail($tempaddr, 236, 0, $ptm);
    if($i>=($shownum-1))    break;
}
