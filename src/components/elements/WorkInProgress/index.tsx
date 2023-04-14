import { CircularProgress } from "@mui/material";
import React from "react";
import Container from "../Container";
import styles from "./styles.module.scss";

function WorkInProgress() {
  return (
    <Container className={styles.workInProgressWrapper}>
      <h1 className={styles.heading}>Скоро буду готова, шеф!)</h1>
      <CircularProgress color="green" />
    </Container>
  );
}

export default WorkInProgress;
