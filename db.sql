-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 05, 2023 at 09:07 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `cityguess`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(60) NOT NULL,
  `registration_ip` varchar(46) NOT NULL DEFAULT '127.0.0.1',
  `isbanned` tinyint(1) NOT NULL DEFAULT 0,
  `creation_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `infocity`
--

CREATE TABLE `infocity` (
  `id` int(11) NOT NULL,
  `iframe` text NOT NULL,
  `pays` varchar(64) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` float NOT NULL,
  `devise` varchar(32) NOT NULL,
  `population` int(11) NOT NULL,
  `touristes` int(11) NOT NULL,
  `emissions` int(11) NOT NULL,
  `usersinternet` int(11) NOT NULL,
  `capitale` varchar(32) NOT NULL,
  `difficulte` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `scoreboard`
--

CREATE TABLE `scoreboard` (
  `id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT 'Guest',
  `score` bigint(20) NOT NULL,
  `mode` varchar(32) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `infocity`
--
ALTER TABLE `infocity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scoreboard`
--
ALTER TABLE `scoreboard`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `infocity`
--
ALTER TABLE `infocity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `scoreboard`
--
ALTER TABLE `scoreboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
