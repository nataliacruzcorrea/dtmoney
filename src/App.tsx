import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTranslationModalOpen, setisNewTranslationModalOpen] =
    useState(false);

  function handleOpenNewTranslationModal() {
    setisNewTranslationModalOpen(true);
  }

  function handleCloseNewTranslationModal() {
    setisNewTranslationModalOpen(false);
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTranslationModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}
      />
      <GlobalStyle />

    </TransactionsProvider>
  );
}
