"use server";
import { useAuth } from "@clerk/nextjs";
import {
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Link,
  Pagination,
  Select,
  SelectItem,
  Chip,
} from "@nextui-org/react";
import React from "react";
import "./password.css";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { AddPassword, GetList } from "../../api/passwordManage.js";
import password from "./password.js";
const rows = [
  {
    key: "1",
    webSite: "Tony Reichert",
    webSiteAlias: "CEO",
    account: "Active",
    password: "Active",
    link: "Active",
    edit: "Active",
    tag: "ipmortant",
  },
];
const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

const columns = [
  {
    key: "webSite",
    label: "webSite",
  },
  {
    key: "webSiteAlias",
    label: "webSiteAlias",
  },
  {
    key: "account",
    label: "account",
  },
  {
    key: "password",
    label: "password",
  },
  {
    key: "link",
    label: "link",
  },
  {
    key: "tag",
    label: "tag",
  },
  {
    key: "edit",
    label: "edit",
  },
];

export default function pcontainr() {
  const [state, setState] = React.useState("edit");
  const [webSite, setWebSite] = React.useState("");
  const [webSiteAlias, setWebSiteAlias] = React.useState("");
  const [account, setAccount] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [currentRecord, setCurrentRecord] = React.useState("");
  const [tag, setTag] = React.useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;
  const users = new Array(50).fill(1).map((record, index) => {
    return {
      webSite: "Tony Reichert",
      webSiteAlias: "CEO",
      account: "Active",
      password: "Active",
      link: "Active",
      edit: "Active",
      key: index,
      tag: index + "import",
    };
  });
  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);
  function searchList() {
    console.log("search");
    GetList().then((res) => {
      console.log(res);
    });
  }
  // let currentRecord = {};
  const handleSelectionChange = (e) => {
    setTag(e.target.value);
  };

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <password
      {...{
        rowsPerPage,
        users,
        columns,
        handleSelectionChange,
        searchList,
        items,
        pages,
        isLoaded,
        userId,
        sessionId,
        getToken,
        state,
        setState,
        webSite,
        setWebSite,
        webSiteAlias,
        setWebSiteAlias,
        account,
        setAccount,
        password,
        setPassword,
        currentRecord,
        setCurrentRecord,
        tag,
        setTag,
        isOpen,
        onOpen,
        onOpenChange,
        page,
        setPage,
      }}
    />
  );
}
