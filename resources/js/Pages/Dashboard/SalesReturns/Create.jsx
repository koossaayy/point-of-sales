import React from "react";
import { useTranslation } from 'react-i18next';
import SalesReturnForm from "./Form";

export default function Create({ transaction }) {
    const { t } = useTranslation();
    return (
        <SalesReturnForm
            title={t('Buat Retur Penjualan')}
            transaction={transaction}
            submitRoute={route("sales-returns.store", transaction.id)}
            submitMethod="post"
            canEdit
        />
    );
}

Create.layout = SalesReturnForm.layout;
