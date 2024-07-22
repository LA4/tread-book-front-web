"use client";

import AddBookForm from "@/components/form/addBookForm";
import InputField from "@/components/inputField/inputField";
import Modal from "@/components/modal/modal";
import { RootState } from "@/components/provider/reduxProvider";
import Icons from "@/components/svg/Icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
const API_THREADBOOK = process.env.API_THREADBOOK
export enum BookStatus {
  READ = "READ",
  CURRENTLY_READING = "CURRENTLY_READING",
  TO_BE_READ = "TO_BE_READ",
}
export type BookProps = {
  id: string;
  title: string;
  pageCount: number;
  categories: string[];
  author: string[];
  publisher: string;
  description: string;
  status: BookStatus;
};

export default function AddPage() {

  const [value, setValue] = useState("");
  const [modal, setModal] = useState<boolean>(false);
  const [dataFormated, setdataFormated] = useState<BookProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [choosingBook, setChoosingBook] = useState<BookProps | null>(null);
  const [error, setError] = useState<string>("")
  const user = useSelector((state: RootState) => state.user.value)

  const router = useRouter();
  const handleInputValue = (data: string) => {
    setValue(data);
  };
  const SearchBookAPI = async () => {
    if (value.trim() === "") {
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=5&printType=books`
      );
      const data = await response.json();
      setdataFormated(
        data.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          pageCount: item.volumeInfo.pageCount,
          categories: item.volumeInfo.categories,
          author: item.volumeInfo.authors,
          publisher: item.volumeInfo.publisher,
          description: item.volumeInfo.description,
        }))
      );
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const handleCloseModal = (data: boolean) => {
    setModal(data);
    setdataFormated(null);
  };
  const handleChoosingBook = (id: string) => {
    if (dataFormated) {
      const choose: BookProps | undefined = dataFormated.find(
        (e) => e.id === id
      );
      setChoosingBook(choose || null);
    }
    setModal(false);
  };
  const handleFormData = async (data: any) => {
    const bookDTO = {
      title: data.title,
      author: data.author,
      category: data.category,
      publisher: data.publisher,
      pages: data.pages,
      pageRead: 0,
      user: user.user_id,
      created_at: new Date(),
      resume: data.resume,
      opinion: "",
      status: BookStatus.CURRENTLY_READING,
    };
    try {
      const response = await fetch(`${API_THREADBOOK}books/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookDTO),
      });
      const data = await response.json();
      if (data.statusCode) {
        setError(data.message)
        return
      }
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex p-[12px] flex-col gap-4 my-[70px] py-[24px] ">

      {modal && (
        <Modal>
          <div className="flex absolute w-screen bg-olive-light h-screen left-0 top-0 flex-col items-center">
            <div className="flex flex-col p-3">
              {loading && (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin-slow h-8 w-8 text-charcol"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              )}
              {dataFormated &&
                dataFormated?.map((e) => {
                  return (
                    <div
                      onClick={() => {
                        handleChoosingBook(e.id);
                      }}
                      className=" text-charcol p-2 flex border-2 border-charcol  m-1 flex-col"
                      key={e.id}
                    >
                      <span>
                        <span className="font-bold">Title : </span>
                        {e.title}
                      </span>
                      <span>
                        <span className="font-bold">Author : </span> {e.author}
                      </span>
                      <span>
                        <span className="font-bold">Category : </span>{" "}
                        {e.categories}
                      </span>
                      <span>
                        <span className="font-bold">Publisher : </span>
                        {e.publisher}
                      </span>
                    </div>
                  );
                })}
              <span
                onClick={() => {
                  handleCloseModal(false);
                  setdataFormated(null);
                }}
                className="flex w-full bg-charcol justify-center fixed bottom-[70px] left-0 mt-1"
              >
                <Icons name="cross"></Icons>
              </span>
            </div>
          </div>
        </Modal>
      )}
      <h4 className="flex justify-center w-full ">Reading a new book</h4>
      {error && <span className="flex text-gold bg-charcol p-2 justify-center">{error}</span>}
      <div className="flex gap-4 px-2 items-center">
        <InputField
          placeholder="Search a book"
          handleInputValue={handleInputValue}
        ></InputField>
        <button
          className="flex bg-charcol font-bold text-sm text-beige-light p-2 rounded-full h-[30px] justify-center items-center"
          onClick={() => {
            if (value.trim() === "") {
              return;
            }
            SearchBookAPI();
            setModal(true);
          }}
        >
          search
        </button>
      </div>
      <AddBookForm data={choosingBook} handleFormData={handleFormData} />
    </main>
  );
}
