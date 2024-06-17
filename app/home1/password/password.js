"use client";
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
} from "@nextui-org/react";
import React from "react";
import "./password.css";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
const rows = [
  {
    key: "1",
    webSite: "Tony Reichert",
    webSiteAlias: "CEO",
    account: "Active",
    password: "Active",
    link: "Active",
    edit: "Active",
  },
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
    key: "edit",
    label: "edit",
  },
];

export default function password() {
  const [webSite, setWebSite] = React.useState("");
  const [webSiteAlias, setWebSiteAlias] = React.useState("");
  const [account, setAccount] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [currentRecord, setCurrentRecord] = React.useState("");
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
    };
  });
  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);
  function searchList() {}
  // let currentRecord = {};
  return (
    <div className="password-container">
      <header>
        <div className="input-container">
          <Input
            className="input"
            color="primary"
            label="webSite"
            value={webSite}
            onValueChange={setWebSite}
          />
          <Input
            color="secondary"
            className="input"
            label="webSiteAlias"
            value={webSiteAlias}
            onValueChange={setWebSiteAlias}
          />
          <Input
            color="success"
            className="input"
            label="account"
            value={account}
            onValueChange={setAccount}
          />
          <Input
            color="warning"
            className="input"
            label="password"
            value={password}
            onValueChange={setPassword}
          />
        </div>
        <div>
          <Button
            radius="full"
            color="primary"
            style={{ marginRight: "8px" }}
            onClick={searchList}
          >
            添加
          </Button>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={searchList}
          >
            查询
          </Button>
        </div>
      </header>
      <section className="table-container">
        <Table
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          aria-label="Example table with dynamic content"
          classNames={{
            base: "max-h-[100%] overflow-scroll",
            table: "min-h-[420px]",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No rows to display."} items={items}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>
                    {columnKey == "edit" ? (
                      <div style={{ display: "flex" }}>
                        <EditIcon
                          className="text-lg text-default-400 cursor-pointer active:opacity-50"
                          style={{ marginRight: "8px" }}
                          onClick={() => {
                            setCurrentRecord(item);
                            console.log(currentRecord);
                            onOpen();
                          }}
                        />
                        <DeleteIcon
                          className="text-lg text-danger cursor-pointer active:opacity-50"
                          onClick={() => {
                            console.log(item);
                          }}
                        />
                      </div>
                    ) : (
                      getKeyValue(item, columnKey)
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">edit</ModalHeader>
              <ModalBody>
                <Input
                  className="input"
                  color="primary"
                  label="webSite"
                  value={currentRecord.webSite}
                  onValueChange={(e) =>
                    setCurrentRecord({ ...currentRecord, webSite: e })
                  }
                />
                <Input
                  color="secondary"
                  className="input"
                  label="webSiteAlias"
                  value={currentRecord.webSiteAlias}
                  onValueChange={(e) =>
                    setCurrentRecord({ ...currentRecord, webSiteAlias: e })
                  }
                />
                <Input
                  color="success"
                  className="input"
                  label="account"
                  value={currentRecord.account}
                  onValueChange={(e) =>
                    setCurrentRecord({ ...currentRecord, account: e })
                  }
                />
                <Input
                  color="warning"
                  className="input"
                  label="password"
                  value={currentRecord.password}
                  onValueChange={(e) =>
                    setCurrentRecord({ ...currentRecord, password: e })
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    console.log(currentRecord);
                    onClose();
                  }}
                >
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
