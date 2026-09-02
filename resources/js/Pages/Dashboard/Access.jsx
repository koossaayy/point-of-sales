import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useTranslation } from 'react-i18next';
import DashboardLayout from "@/Layouts/DashboardLayout";
import {
    IconShoppingCart,
    IconUsers,
    IconFileInvoice,
    IconCurrencyDollar,
    IconBuildingWarehouse,
    IconChartArrowsVertical,
} from "@tabler/icons-react";
import hasAnyPermission from "@/Utils/Permission";
import i18n from '@/i18n';

const cards = [
    {
        get title() { return i18n.t('Transaksi'); },
        get desc() { return i18n.t('Mulai transaksi kasir'); },
        icon: <IconShoppingCart size={22} />,
        route: "transactions.index",
        perms: ["transactions-access"],
    },
    {
        get title() { return i18n.t('Pelanggan'); },
        get desc() { return i18n.t('Kelola data pelanggan'); },
        icon: <IconUsers size={22} />,
        route: "customers.index",
        perms: ["customers-access"],
    },
    {
        get title() { return i18n.t('Piutang'); },
        get desc() { return i18n.t('Nota barang pelanggan'); },
        icon: <IconFileInvoice size={22} />,
        route: "receivables.index",
        perms: ["receivables-access"],
    },
    {
        get title() { return i18n.t('Hutang'); },
        get desc() { return i18n.t('Catat hutang supplier'); },
        icon: <IconCurrencyDollar size={22} />,
        route: "payables.index",
        perms: ["payables-access"],
    },
    {
        get title() { return i18n.t('Supplier'); },
        get desc() { return i18n.t('Kelola data supplier'); },
        icon: <IconBuildingWarehouse size={22} />,
        route: "suppliers.index",
        perms: ["suppliers-access"],
    },
    {
        get title() { return i18n.t('Laporan'); },
        get desc() { return i18n.t('Lihat laporan penjualan'); },
        icon: <IconChartArrowsVertical size={22} />,
        route: "reports.sales.index",
        perms: ["reports-access"],
    },
];

function AccessPage() {
    const { t } = useTranslation();
    const { auth } = usePage().props;

    const visibleCards = cards.filter((card) =>
        hasAnyPermission(card.perms, auth?.permissions)
    );

    return (
        <>
            <Head title={t('Akses')} />
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {t('Pilih Akses')}
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {t('Halaman ini muncul ketika Anda tidak memiliki akses dashboard.')}
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleCards.length ? (
                        visibleCards.map((card) => (
                            <Link
                                key={card.title}
                                href={route(card.route)}
                                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-start gap-3 hover:border-primary-300 dark:hover:border-primary-700 transition-colors shadow-sm"
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 flex items-center justify-center">
                                    {card.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-slate-900 dark:text-white">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {card.desc}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-slate-500 dark:text-slate-400">
                            {t('Tidak ada akses tersedia. Hubungi admin.')}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

AccessPage.layout = (page) => <DashboardLayout children={page} />;

export default AccessPage;
