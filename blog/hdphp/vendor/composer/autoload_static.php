<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd5f78ccf6206c9bb7156e5bcec6983b5
{
    public static $files = array (
        'e27462e627a88b1c7e8df9acd31610f4' => __DIR__ . '/..' . '/houdunwang/framework/src/kernel/helper.php',
    );

    public static $prefixLengthsPsr4 = array (
        'w' => 
        array (
            'wechat\\' => 7,
        ),
        's' => 
        array (
            'system\\' => 7,
        ),
        'h' => 
        array (
            'hdphp\\' => 6,
        ),
        'a' => 
        array (
            'app\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'wechat\\' => 
        array (
            0 => __DIR__ . '/..' . '/houdunwang/wechat/src',
        ),
        'system\\' => 
        array (
            0 => __DIR__ . '/../..' . '/system',
        ),
        'hdphp\\' => 
        array (
            0 => __DIR__ . '/..' . '/houdunwang/framework/src',
        ),
        'app\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd5f78ccf6206c9bb7156e5bcec6983b5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd5f78ccf6206c9bb7156e5bcec6983b5::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
