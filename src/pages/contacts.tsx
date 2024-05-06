import ContactsAndInfo from "@/components/contacts/contacts-tiffy";
import Head from "next/head";
import React from "react";

function contacts() {
  return (
    <div>
      <Head>
        <title>TIFFI</title>
      </Head>
      <ContactsAndInfo />
    </div>
  );
}

export default contacts;
