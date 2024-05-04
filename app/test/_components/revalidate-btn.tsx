"use client";
import React from "react";
import { RevalidateAction } from "../_actions";

export const RevalidateBtn = () => {
  return (
    <form action={RevalidateAction}>
      <button type="submit">Reavlidate</button>
    </form>
  );
};
