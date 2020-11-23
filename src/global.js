import React, { useState, Component, useEffect } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink,
  useHistory,
  useLocation,
} from "react-router-dom";

import ReactDOM from "react-dom";
import lodash from "lodash";
import _ from "lodash";

import DataUtils from "./DataUtils";

/**Antd css */
import "antd/dist/antd.css";
/**React redux */
import { useDispatch, connect } from "react-redux";

/*Antd lib */
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Row from "antd/lib/row";
import Table from "antd/lib/table";
import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import PageHeader from "antd/lib/page-header";
import Menu from "antd/lib/menu";
import Col from "antd/lib/col";
import Layout from "antd/lib/layout";
import Modal from "antd/lib/modal";
import Card from "antd/lib/card";
import Checkbox from "antd/lib/checkbox";
import InputNumber from "antd/lib/input-number";
import Select from "antd/lib/select";
import Avatar from "antd/lib/avatar";
import Divider from "antd/lib/divider";

/**Antd icons */
import { UserOutlined, LockOutlined } from "@ant-design/icons";

/**Redux form */
import { Field, reduxForm } from "redux-form";

/**global export */
export {
  //React
  useState,
  React,
  ReactDOM,
  lodash,
  DataUtils,
  Component,
  //Redux Router
  BrowserRouter,
  Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink,
  useHistory,
  useLocation,
  //Antd lib
  Menu,
  Button,
  PageHeader,
  Row,
  Col,
  Table,
  Layout,
  Modal,
  Card,
  Checkbox,
  Form,
  Input,
  Icon,
  InputNumber,
  Select,
  Avatar,
  Divider,
  //Antd Icons
  UserOutlined,
  LockOutlined,
  //Redux Form
  Field,
  reduxForm,
  //React Redux
  useDispatch,
  connect,
  /**Lodash */
  _,
  useEffect,
};
