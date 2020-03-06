-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2020 at 09:13 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pesss`
--

-- --------------------------------------------------------

--
-- Table structure for table `cashier`
--

CREATE TABLE `cashier` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(200) NOT NULL DEFAULT 'public\\images\\profil\\user.png',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `roll` int(5) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cashier`
--

INSERT INTO `cashier` (`id`, `name`, `email`, `password`, `image`, `created_at`, `updated_at`, `roll`) VALUES
(1, 'admin', 'admin@mail.com', 'admin123', 'public\\images\\image-1581585292879.jpg', '2020-01-25 11:15:43', '2020-01-25 11:15:43', 1),
(28, 'najih', 'najih', 'najih123', '0', '2020-02-07 10:08:32', '2020-02-07 10:08:32', 1),
(30, 'Irvan', 'irvan@mail.com', '$2a$10$HfIPSTEaY41pxTgd/5GaA.0UPmuF8pm4AIZAtze2z2XP7/wPYOPiO', '0', '2020-02-08 17:50:13', '2020-02-08 17:50:13', 2),
(31, 'Hakam Fza', 'hakam', '$2a$10$73YIA97PUQJ9S29EGqoXIObQfvuqCpV6fR9g5jLyX0aWz9hHnQm22', '0', '2020-02-08 23:31:48', '2020-02-08 23:31:48', 1),
(32, 'cashier3', 'cashier3', '$2a$10$vsPTjIM3tofX5CAWA.Ten.55Kkm157IvZqtCQFaRT1cspvvtQooSS', 'public\\images\\profil\\user.png', '2020-02-10 12:32:36', '2020-02-10 12:32:36', 2),
(37, 'Irvan Cuy', 'irvan', '$2a$10$REiYUOzkYBpc6gADH5yHEOk4PtK.THQAhWRDF/31Br73prqvDViP6', 'public\\images\\image-1581528184899.jpg', '2020-02-11 16:58:57', '2020-02-11 16:58:57', 2),
(45, 'Yo Cafe Demo App', 'yocafe', '$2a$10$5MV7BZjddIIlr86LNjKchu2QCa6X6T3hyN..gKZefY8goO0EEvCou', 'public\\images\\profil\\user.png', '2020-02-13 01:29:07', '2020-02-13 01:29:07', 2),
(46, 'okelah', 'okelah', '$2a$10$vtSx2l8v3WqqSHrg9RRyruLysiqXAy4Ztlysm9nZ5R/LxotFjYJZO', 'public\\images\\image-1583481712184.jpg', '2020-02-13 03:48:22', '2020-02-13 03:48:22', 2),
(52, 'Irvan ', 'irvan@mail.com', '$2a$10$1UtmCJa8.pujFXpXsuL4OuJsgua9pOuYg.b./upAQP9Z4BqJKda5C', 'public\\images\\image-1581585079767.jpg', '2020-02-13 09:07:59', '2020-02-13 09:07:59', 2);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(139, 'Signature'),
(140, 'Classic'),
(141, 'Fancy'),
(142, 'Non Coffee'),
(143, 'Milkshake');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `invoice` int(11) NOT NULL,
  `cashier_id` int(11) DEFAULT 1,
  `total` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`invoice`, `cashier_id`, `total`, `created_at`, `updated_at`) VALUES
(141865, 1, 50000, '2020-03-05 09:16:07', '0000-00-00 00:00:00'),
(643763, 1, 55000, '2020-03-03 10:02:44', '2020-03-03 00:00:00'),
(652719, 1, 25000, '2020-03-03 10:03:44', '2020-03-03 00:00:00'),
(704256, 1, 50000, '2020-03-04 11:37:25', '0000-00-00 00:00:00'),
(877007, 1, 40000, '2020-03-04 11:37:14', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `invoice` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `subtotal` int(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `invoice`, `product_id`, `qty`, `subtotal`, `created`, `updated`) VALUES
(124498, 512682, 236, 1, 25000, '2020-02-12 15:16:34', '2020-02-12 15:16:34'),
(124499, 598153, 237, 1, 25000, '2020-02-12 15:20:51', '2020-02-12 15:20:51'),
(124500, 598153, 236, 1, 25000, '2020-02-12 15:20:51', '2020-02-12 15:20:51'),
(124501, 742476, 237, 1, 25000, '2020-02-12 15:25:16', '2020-02-12 15:25:16'),
(124502, 742476, 236, 1, 25000, '2020-02-12 15:25:16', '2020-02-12 15:25:16'),
(124503, 737697, 237, 1, 25000, '2020-02-12 15:27:12', '2020-02-12 15:27:12'),
(124504, 202129, 236, 1, 25000, '2020-02-12 15:38:11', '2020-02-12 15:38:11'),
(124505, 202129, 237, 1, 25000, '2020-02-12 15:38:11', '2020-02-12 15:38:11'),
(124506, 153537, 236, 1, 25000, '2020-02-12 15:42:18', '2020-02-12 15:42:18'),
(124507, 153537, 237, 1, 25000, '2020-02-12 15:42:18', '2020-02-12 15:42:18'),
(124508, 319416, 237, 1, 25000, '2020-02-12 15:43:47', '2020-02-12 15:43:47'),
(124509, 847161, 237, 1, 25000, '2020-02-12 16:54:53', '2020-02-12 16:54:53'),
(124510, 847161, 236, 1, 25000, '2020-02-12 16:54:53', '2020-02-12 16:54:53'),
(124511, 837940, 237, 1, 25000, '2020-02-12 17:32:17', '2020-02-12 17:32:17'),
(124512, 837940, 236, 1, 25000, '2020-02-12 17:32:17', '2020-02-12 17:32:17'),
(124513, 880924, 237, 1, 25000, '2020-02-12 17:42:12', '2020-02-12 17:42:12'),
(124514, 880924, 236, 1, 25000, '2020-02-12 17:42:12', '2020-02-12 17:42:12'),
(124515, 954927, 237, 1, 25000, '2020-02-13 03:53:27', '2020-02-13 03:53:27'),
(124516, 954927, 236, 2, 50000, '2020-02-13 03:53:27', '2020-02-13 03:53:27'),
(124517, 236249, 240, 1, 20000, '2020-03-02 08:17:16', '2020-03-02 08:17:16'),
(124518, 236249, 238, 1, 30000, '2020-03-02 08:17:16', '2020-03-02 08:17:16'),
(124519, 236249, 239, 1, 20000, '2020-03-02 08:17:16', '2020-03-02 08:17:16'),
(124520, 229469, 240, 1, 20000, '2020-03-02 08:17:22', '2020-03-02 08:17:22'),
(124521, 229469, 238, 1, 30000, '2020-03-02 08:17:22', '2020-03-02 08:17:22'),
(124522, 229469, 239, 1, 20000, '2020-03-02 08:17:22', '2020-03-02 08:17:22'),
(124523, 251310, 247, 1, 33000, '2020-03-02 09:01:01', '2020-03-02 09:01:01'),
(124524, 251310, 245, 1, 30000, '2020-03-02 09:01:01', '2020-03-02 09:01:01'),
(124525, 251310, 246, 1, 30000, '2020-03-02 09:01:01', '2020-03-02 09:01:01'),
(124526, 116210, 239, 1, 20000, '2020-03-02 09:05:55', '2020-03-02 09:05:55'),
(124527, 116210, 238, 1, 30000, '2020-03-02 09:05:55', '2020-03-02 09:05:55'),
(124528, 353354, 239, 1, 20000, '2020-03-02 09:08:52', '2020-03-02 09:08:52'),
(124529, 353354, 238, 1, 30000, '2020-03-02 09:08:52', '2020-03-02 09:08:52'),
(124530, 353354, 243, 1, 28000, '2020-03-02 09:08:52', '2020-03-02 09:08:52'),
(124531, 643763, 238, 1, 30000, '2020-03-03 10:02:44', '2020-03-03 10:02:44'),
(124532, 643763, 237, 1, 25000, '2020-03-03 10:02:44', '2020-03-03 10:02:44'),
(124533, 652719, 237, 1, 25000, '2020-03-03 10:03:44', '2020-03-03 10:03:44'),
(124534, 877007, 239, 1, 20000, '2020-03-04 11:37:14', '2020-03-04 11:37:14'),
(124535, 877007, 240, 1, 20000, '2020-03-04 11:37:14', '2020-03-04 11:37:14'),
(124536, 704256, 239, 1, 20000, '2020-03-04 11:37:25', '2020-03-04 11:37:25'),
(124537, 704256, 238, 1, 30000, '2020-03-04 11:37:25', '2020-03-04 11:37:25'),
(124538, 141865, 238, 1, 30000, '2020-03-05 09:16:06', '2020-03-05 09:16:06'),
(124539, 141865, 239, 1, 20000, '2020-03-05 09:16:06', '2020-03-05 09:16:06');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_category` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `image`, `id_category`, `created`, `updated`) VALUES
(237, 'Latte', 25000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581517092726.jpg', 139, '2020-02-12 14:18:12', '2020-02-12 14:18:12'),
(238, 'Americano', 30000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581528675889.jpg', 139, '2020-02-12 17:31:16', '2020-02-12 17:31:16'),
(239, 'Espresso', 20000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581528877939.jpg', 139, '2020-02-12 17:34:37', '2020-02-12 17:34:37'),
(240, 'Vietnamesse Coffe', 20000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581529027285.jpg', 140, '2020-02-12 17:37:07', '2020-02-12 17:37:07'),
(241, 'Single Origin', 27000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581529070925.jpg', 140, '2020-02-12 17:37:50', '2020-02-12 17:37:50'),
(242, 'caramelle Late', 28000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581529164741.jpg', 141, '2020-02-12 17:39:24', '2020-02-12 17:39:24'),
(243, 'Picollo Latte', 28000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581562608728.jpg', 139, '2020-02-13 02:56:48', '2020-02-13 02:56:48'),
(244, 'Doppio', 29000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581562764266.jpg', 139, '2020-02-13 02:59:24', '2020-02-13 02:59:24'),
(245, 'Cappucino Milk', 30000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581562822060.jpg', 139, '2020-02-13 03:00:22', '2020-02-13 03:00:22'),
(246, 'Americano Ice', 30000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581562873698.jpg', 139, '2020-02-13 03:01:13', '2020-02-13 03:01:13'),
(247, 'Single Origin Ex', 33000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1581563167182.jpg', 139, '2020-02-13 03:06:07', '2020-02-13 03:06:07'),
(249, 'Single Origin Ex', 33000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'public\\images\\image-1583478081951.png', 139, '2020-03-06 07:01:21', '2020-03-06 07:01:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cashier`
--
ALTER TABLE `cashier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`invoice`),
  ADD KEY `cashier_id` (`cashier_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`invoice`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`id_category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cashier`
--
ALTER TABLE `cashier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124540;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`cashier_id`) REFERENCES `cashier` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
