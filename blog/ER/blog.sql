-- MySQL Script generated by MySQL Workbench
-- 11/26/16 13:38:07
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
-- 博客
DROP SCHEMA IF EXISTS `blog` ;

-- -----------------------------------------------------
-- Schema blog
--
-- 博客
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 ;
USE `blog` ;

-- -----------------------------------------------------
-- Table `blog`.`hd_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `blog`.`hd_category` ;

CREATE TABLE IF NOT EXISTS `blog`.`hd_category` (
  `cid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cname` VARCHAR(20) NOT NULL DEFAULT '' COMMENT '栏目名称',
  `keywords` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '关键字',
  `description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '描述',
  `isoff` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0为正常,1为关闭',
  PRIMARY KEY (`cid`))
ENGINE = MyISAM
COMMENT = '栏目表';


-- -----------------------------------------------------
-- Table `blog`.`hd_article`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `blog`.`hd_article` ;

CREATE TABLE IF NOT EXISTS `blog`.`hd_article` (
  `aid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL COMMENT '文章标题',
  `content` TEXT(65535) NULL COMMENT '文章内容',
  `time` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '发表时间',
  `thumb` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '缩略图',
  `intro` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '文章摘要',
  `click` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '点击次数',
  `istop` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0为正常,1为置顶',
  `isdeal` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0为正常,1为进入回收站',
  `cid` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '所属栏目ID',
  PRIMARY KEY (`aid`),
  INDEX `fk_hd_article_hd_category1_idx` (`cid` ASC))
ENGINE = MyISAM
COMMENT = '文章表';


-- -----------------------------------------------------
-- Table `blog`.`hd_comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `blog`.`hd_comment` ;

CREATE TABLE IF NOT EXISTS `blog`.`hd_comment` (
  `coid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(20) NOT NULL DEFAULT '' COMMENT '用户昵称',
  `time` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '评论时间',
  `content` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '评论内容',
  `aid` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '所属文章ID',
  PRIMARY KEY (`coid`),
  INDEX `fk_hd_comment_hd_article_idx` (`aid` ASC))
ENGINE = MyISAM
COMMENT = '评论表';


-- -----------------------------------------------------
-- Table `blog`.`hd_admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `blog`.`hd_admin` ;

CREATE TABLE IF NOT EXISTS `blog`.`hd_admin` (
  `adid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NOT NULL DEFAULT '' COMMENT '后台用户名',
  `passwd` CHAR(32) NOT NULL DEFAULT '' COMMENT '后台用户密码',
  PRIMARY KEY (`adid`))
ENGINE = MyISAM
COMMENT = '后台用户表';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;