"use client";
import { BookProps } from "@/app/addBook/page";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type BooksDetailsProps = {
  id: string;
};

export default function BooksDetails({ params }: { params: { slug: string } }) {
  const [bookData, setBookData] = useState<BookProps | null>();

  const fetchDetailsById = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${id}`);
      const data = await response.json();
      for (let items in data) {
        const items = data[items];
      }
      console.log(bookData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetailsById(params.slug);
  }, []);
  return (
    <div>
      <span>{bookData && bookData.title}</span>
    </div>
  );
}
