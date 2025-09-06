import { NextPage } from "next";

import DefaultLayout from "@/pages/layouts/default";
import { UnderConstruction } from "@/components/under-construction";

const ContactPage: NextPage = () => {
  return (
    <DefaultLayout>
      <UnderConstruction />
    </DefaultLayout>
  );
};

export default ContactPage;
