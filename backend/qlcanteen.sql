-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th10 15, 2020 lúc 11:27 AM
-- Phiên bản máy phục vụ: 5.7.31
-- Phiên bản PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlcanteen`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `drinks`
--

DROP TABLE IF EXISTS `drinks`;
CREATE TABLE IF NOT EXISTS `drinks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) DEFAULT NULL,
  `price` varchar(300) DEFAULT NULL,
  `photo` varchar(300) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoices`
--

DROP TABLE IF EXISTS `invoices`;
CREATE TABLE IF NOT EXISTS `invoices` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `reference` varchar(300) DEFAULT NULL,
  `customer_name` varchar(300) DEFAULT NULL,
  `customer_address` varchar(300) DEFAULT NULL,
  `customer_email` varchar(300) DEFAULT NULL,
  `customer_phone` varchar(300) DEFAULT NULL,
  `order_reference` varchar(300) DEFAULT NULL,
  `amount` varchar(300) DEFAULT NULL,
  `is_paid` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reference` (`reference`),
  KEY `order_reference` (`order_reference`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `item_orders`
--

DROP TABLE IF EXISTS `item_orders`;
CREATE TABLE IF NOT EXISTS `item_orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `meal_id` bigint(20) DEFAULT NULL,
  `order_reference` varchar(300) DEFAULT NULL,
  `drink_id` bigint(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `is_meal` tinyint(1) DEFAULT NULL,
  `price` varchar(300) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `meal_id` (`meal_id`),
  KEY `drink_id` (`drink_id`),
  KEY `order_reference` (`order_reference`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `meals`
--

DROP TABLE IF EXISTS `meals`;
CREATE TABLE IF NOT EXISTS `meals` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `price` varchar(300) DEFAULT NULL,
  `photo` varchar(300) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `meals`
--

INSERT INTO `meals` (`id`, `name`, `price`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Cơm cà ri bò', '65000', 'comcaribo', '2020-11-11 10:05:52', '2020-11-11 10:05:52'),
(2, 'Cơm thịt bò xào', '60000', 'comthitboxao', '2020-11-11 10:06:56', '2020-11-11 10:06:56'),
(3, 'Cơm trộn hàn quốc', '70000', 'comtronhanquoc', '2020-11-11 10:06:56', '2020-11-11 10:06:56'),
(4, 'Cơm trộn phô mai', '75000', 'comtronphomai', '2020-11-11 10:08:08', '2020-11-11 10:08:08'),
(5, 'Cơm thịt heo chiên giòn', '80000', 'comthitheochiengion', '2020-11-11 10:08:08', '2020-11-11 10:08:08'),
(6, 'Cơm bò hầm vang', '90000', 'combohamvang', '2020-11-11 10:08:08', '2020-11-11 10:08:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menus`
--

DROP TABLE IF EXISTS `menus`;
CREATE TABLE IF NOT EXISTS `menus` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) DEFAULT NULL,
  `is_published` tinyint(1) DEFAULT '0',
  `published_at` timestamp NULL DEFAULT NULL,
  `menu_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menu_meals`
--

DROP TABLE IF EXISTS `menu_meals`;
CREATE TABLE IF NOT EXISTS `menu_meals` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `menu_id` bigint(20) DEFAULT NULL,
  `meal_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`),
  KEY `meal_id` (`meal_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `reference` varchar(300) DEFAULT NULL,
  `customer_id` bigint(20) DEFAULT NULL,
  `is_validated` tinyint(1) DEFAULT '0',
  `validation_date` timestamp NULL DEFAULT NULL,
  `id_admin_validation` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reference` (`reference`),
  KEY `customer_id` (`customer_id`),
  KEY `id_admin_validation` (`id_admin_validation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `invoice_reference` varchar(300) DEFAULT NULL,
  `payment_method` varchar(300) DEFAULT NULL,
  `payment_reference` varchar(300) DEFAULT NULL,
  `amount` varchar(300) DEFAULT NULL,
  `id_admin_paid` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `payment_reference_2` (`payment_reference`),
  KEY `invoice_reference` (`invoice_reference`),
  KEY `payment_reference` (`payment_reference`),
  KEY `id_admin_paid` (`id_admin_paid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payment_receipts`
--

DROP TABLE IF EXISTS `payment_receipts`;
CREATE TABLE IF NOT EXISTS `payment_receipts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `reference` varchar(300) DEFAULT NULL,
  `invoice_reference` varchar(300) DEFAULT NULL,
  `payment_reference` varchar(300) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reference` (`reference`),
  KEY `invoice_reference` (`invoice_reference`),
  KEY `payment_reference` (`payment_reference`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) DEFAULT NULL,
  `code` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) DEFAULT NULL,
  `phone` varchar(300) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL,
  `password` varchar(300) DEFAULT NULL,
  `photo` varchar(300) DEFAULT NULL,
  `role_code` varchar(300) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role_code` (`role_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `item_orders`
--
ALTER TABLE `item_orders`
  ADD CONSTRAINT `item_orders_ibfk_1` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `item_orders_ibfk_2` FOREIGN KEY (`order_reference`) REFERENCES `orders` (`reference`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_orders_ibfk_3` FOREIGN KEY (`drink_id`) REFERENCES `drinks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Các ràng buộc cho bảng `menu_meals`
--
ALTER TABLE `menu_meals`
  ADD CONSTRAINT `menu_meals_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `menu_meals_ibfk_2` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_admin_validation`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`invoice_reference`) REFERENCES `invoices` (`reference`),
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`id_admin_paid`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `payment_receipts`
--
ALTER TABLE `payment_receipts`
  ADD CONSTRAINT `payment_receipts_ibfk_1` FOREIGN KEY (`invoice_reference`) REFERENCES `invoices` (`reference`),
  ADD CONSTRAINT `payment_receipts_ibfk_2` FOREIGN KEY (`payment_reference`) REFERENCES `payments` (`payment_reference`);

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_code`) REFERENCES `roles` (`code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
