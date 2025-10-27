"use client";
import { StaticContent } from "@/lib/Content";
import React from "react";
import {
  HiOutlineEnvelopeOpen,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

const address = new StaticContent().companyInfo;
function ContactDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-4 py-20">
      <div className="space-y-10">
        <div className="flex gap-x-5">
        <div className="shrink-0 bg-neutral-900  size-10 rounded-full grid place-content-center text-neutral-100 contactForm">
        <HiOutlineMapPin size={20}/>
          </div>
          
          <div className="grow">
            <h4 className="text-neutral-500 font-medium contactForm">
              Address:
            </h4>

            <address className="mt-1 text-neutral-800 not-italic contactForm text-lg font-medium max-w-sm">
              <span className="font-semibold ">{address?.name}</span>
              <br />
              {address?.address?.India}
            </address>
          </div>
        </div>

        <div className="flex gap-x-5 contactForm">
          <div className="shrink-0 bg-neutral-900  size-10 rounded-full grid place-content-center text-neutral-100 contactForm">
          <HiOutlineEnvelopeOpen
            size={20}
          />
          </div>
          <div className="grow">
            <h4 className="text-neutral-500 font-medium contactForm">
              Email us:
            </h4>

            <a
              className="mt-1 text-neutral-800 focus:outline-none contactForm  text-lg font-semibold"
              href={`mailto:${address?.email}`}
            >
              {address?.email}
            </a>
          </div>
        </div>

        <div className="flex gap-x-5 contactForm">
        <div className="shrink-0 bg-neutral-900  size-10 rounded-full grid place-content-center text-neutral-100 contactForm">
        <HiOutlinePhone size={20}/>
          </div>
          <div className="grow">
            <h4 className="text-neutral-500 font-medium contactForm">
              Contact:
            </h4>

            <a
              className="mt-1 text-neutral-800 focus:outline-none contactForm  text-lg font-semibold"
              href={`tel:${address?.phone?.replace(/ /g, "")}`}
            >
              {address?.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full contactForm">
        <iframe
        className="w-full max-w-xl h-full rounded-lg border"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.879513620704!2d76.00368400587931!3d11.47283406598115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66932fa8381b5%3A0x7acc5e197030bb64!2sNeptuneMark!5e0!3m2!1sen!2sin!4v1756804017361!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactDetails;
