"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { VariantDisplay } from "../../ui/component-display";
import { useState } from "react";

interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

const demoPayments: Payment[] = [
  {
    id: "INV001",
    amount: 125.0,
    status: "pending",
    email: "user1@example.com",
  },
  {
    id: "INV002",
    amount: 79.5,
    status: "success",
    email: "user2@example.com",
  },
  {
    id: "INV003",
    amount: 499.99,
    status: "processing",
    email: "user3@example.com",
  },
  {
    id: "INV004",
    amount: 35.0,
    status: "failed",
    email: "user4@example.com",
  },
  {
    id: "INV005",
    amount: 24.99,
    status: "success",
    email: "user5@example.com",
  },
];

function getStatusColor(status: Payment["status"]) {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "success":
      return "bg-green-100 text-green-800";
    case "failed":
      return "bg-red-100 text-red-800";
    default:
      return "";
  }
}

function SimpleDataTable() {
  return (
    <Table>
      <TableCaption>A list of recent payments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {demoPayments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">{payment.id}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                  payment.status
                )}`}
              >
                {payment.status}
              </span>
            </TableCell>
            <TableCell>{payment.email}</TableCell>
            <TableCell className="text-right">
              ${payment.amount.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            $
            {demoPayments
              .reduce((total, payment) => total + payment.amount, 0)
              .toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

function InteractiveDataTable() {
  const [filteredPayments, setFilteredPayments] =
    useState<Payment[]>(demoPayments);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!term.trim()) {
      setFilteredPayments(demoPayments);
      return;
    }

    const filtered = demoPayments.filter(
      (payment) =>
        payment.id.toLowerCase().includes(term.toLowerCase()) ||
        payment.email.toLowerCase().includes(term.toLowerCase()) ||
        payment.status.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredPayments(filtered);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPayments.length > 0 ? (
            filteredPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                      payment.status
                    )}`}
                  >
                    {payment.status}
                  </span>
                </TableCell>
                <TableCell>{payment.email}</TableCell>
                <TableCell className="text-right">
                  ${payment.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No results found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default function DataTablePage() {
  return (
    <VariantDisplay
      title="Data Table"
      description="Advanced tables for displaying and interacting with structured data."
      usage={`import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function MyTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`}
      variants={[
        {
          title: "Simple Data Table",
          description: "Basic table with header, body, footer, and caption.",
          component: <SimpleDataTable />,
          code: `function SimpleDataTable() {
  return (
    <Table>
      <TableCaption>A list of recent payments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">{payment.id}</TableCell>
            <TableCell>
              <span className={\`px-2 py-1 rounded-full text-xs \${getStatusColor(payment.status)}\`}>
                {payment.status}
              </span>
            </TableCell>
            <TableCell>{payment.email}</TableCell>
            <TableCell className="text-right">\${payment.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            \${payments.reduce((total, payment) => total + payment.amount, o).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`,
        },
        {
          title: "Interactive Data Table",
          description: "Table with search functionality and row actions.",
          component: <InteractiveDataTable />,
          code: `function InteractiveDataTable() {
  const [filteredPayments, setFilteredPayments] = useState(payments);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term.trim()) {
      setFilteredPayments(payments);
      return;
    }
    
    const filtered = payments.filter(
      (payment) =>
        payment.id.toLowerCase().includes(term.toLowerCase()) ||
        payment.email.toLowerCase().includes(term.toLowerCase()) ||
        payment.status.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredPayments(filtered);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPayments.length > 0 ? (
            filteredPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>
                  <span className={\`px-2 py-1 rounded-full text-xs \${getStatusColor(payment.status)}\`}>
                    {payment.status}
                  </span>
                </TableCell>
                <TableCell>{payment.email}</TableCell>
                <TableCell className="text-right">\${payment.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No results found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Data tables are used to organize and display data efficiently. They
            can be enhanced with features like sorting, filtering, pagination,
            and row actions.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">Table Subcomponents</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">Table</code> -
                The main container
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  TableHeader
                </code>{" "}
                - Container for table header row
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">TableBody</code>{" "}
                - Container for table body rows
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  TableFooter
                </code>{" "}
                - Container for table footer rows
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">TableRow</code> -
                Table row element
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">TableHead</code>{" "}
                - Table header cell
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">TableCell</code>{" "}
                - Table data cell
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  TableCaption
                </code>{" "}
                - Caption for the table
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
