import { Head } from "@inertiajs/react";
import { useTranslation } from '@/i18n';
import PublicLayout from "@/Layouts/PublicLayout";
import { IconBook2, IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import i18next from 'i18next';

const GITHUB_URL = "https://github.com/aryadwiputra/point-of-sales";
const DOCS_BASE = `${GITHUB_URL}/blob/main/docs`;

const categories = [
    {
        get title() { return i18next.t('Mulai Cepat'); },
        docs: [
            { file: "getting-started.md", get title() { return i18next.t('Getting Started'); }, get desc() { return i18next.t('Panduan setup lengkap dari nol sampai bisa login & mengakses dashboard.'); } },
            { file: "configuration.md", get title() { return i18next.t('Konfigurasi'); }, get desc() { return i18next.t('Environment, payment gateway, pajak, printer thermal, dan WhatsApp.'); } },
            { file: "architecture-overview.md", get title() { return i18next.t('Arsitektur'); }, get desc() { return i18next.t('Struktur kode, service layer, middleware, dan Node service.'); } },
            { file: "feature-index.md", get title() { return i18next.t('Indeks Fitur'); }, get desc() { return i18next.t('Daftar semua 44+ modul dan statusnya.'); } },
        ],
    },
    {
        get title() { return i18next.t('POS & Transaksi'); },
        docs: [
            { file: "features/pos-transactions.md", get title() { return i18next.t('Transaksi POS'); }, get desc() { return i18next.t('Alur cart, checkout, hold/resume, dan multi-payment.'); } },
            { file: "features/cashier-shifts.md", get title() { return i18next.t('Shift Kasir'); }, get desc() { return i18next.t('Buka/tutup shift dan rekap kas per shift.'); } },
            { file: "features/sales-returns.md", get title() { return i18next.t('Retur Penjualan'); }, get desc() { return i18next.t('Proses retur dari transaksi yang sudah jadi.'); } },
            { file: "features/mobile-pos.md", get title() { return i18next.t('Mobile POS (PWA)'); }, get desc() { return i18next.t('Gunakan kasir dari HP — installable dan offline-ready.'); } },
            { file: "features/thermal-printer.md", get title() { return i18next.t('Printer Thermal'); }, get desc() { return i18next.t('Cetak struk 58/80mm via WebUSB.'); } },
        ],
    },
    {
        get title() { return i18next.t('Inventory & Warehouse'); },
        docs: [
            { file: "features/inventory-stock.md", get title() { return i18next.t('Inventory & Stok'); }, get desc() { return i18next.t('Produk, kategori, stock opname, dan mutasi stok.'); } },
            { file: "features/multi-warehouse.md", title: "Multi-Warehouse", get desc() { return i18next.t('Stok per gudang dan transfer antar gudang.'); } },
            { file: "features/unit-conversion.md", title: "Multi-Satuan", get desc() { return i18next.t('Konversi satuan produk (pcs, box, kg, karton).'); } },
        ],
    },
    {
        get title() { return i18next.t('Purchasing & Finance'); },
        docs: [
            { file: "features/purchasing-chain.md", get title() { return i18next.t('Rantai Pengadaan'); }, get desc() { return i18next.t('Purchase order, goods receiving, dan supplier return.'); } },
            { file: "features/payables-suppliers.md", get title() { return i18next.t('Supplier & Payables'); }, get desc() { return i18next.t('Kelola supplier dan hutang.'); } },
            { file: "features/receivables.md", get title() { return i18next.t('Receivables'); }, get desc() { return i18next.t('Piutang pelanggan dan pembayaran parsial.'); } },
            { file: "features/tax-management.md", get title() { return i18next.t('Manajemen Pajak'); }, get desc() { return i18next.t('PPN, NPWP, dan NIB.'); } },
            { file: "features/customer-portal.md", get title() { return i18next.t('Customer Portal'); }, get desc() { return i18next.t('Portal self-service: lihat invoice & bayar online.'); } },
        ],
    },
    {
        get title() { return i18next.t('CRM & Loyalty'); },
        docs: [
            { file: "features/crm-segments.md", get title() { return i18next.t('Segmen & Campaign'); }, get desc() { return i18next.t('Segmentasi otomatis dan campaign marketing.'); } },
            { file: "features/member-management.md", get title() { return i18next.t('Member Management'); }, get desc() { return i18next.t('Tier member dan poin loyalty.'); } },
            { file: "features/promotions-loyalty.md", get title() { return i18next.t('Promo & Loyalty'); }, get desc() { return i18next.t('Pricing rules, voucher, dan program loyalty.'); } },
        ],
    },
    {
        get title() { return i18next.t('Admin & Tools'); },
        docs: [
            { file: "features/rbac-users-roles.md", get title() { return i18next.t('RBAC'); }, get desc() { return i18next.t('User, role, dan permission.'); } },
            { file: "features/audit-logs.md", get title() { return i18next.t('Audit Log'); }, get desc() { return i18next.t('Jejak perubahan before/after.'); } },
            { file: "features/settings-payments.md", get title() { return i18next.t('Payment Settings'); }, get desc() { return i18next.t('Midtrans, Xendit, dan bank accounts.'); } },
            { file: "features/import-export.md", title: "Import/Export", get desc() { return i18next.t('Produk & customer via Excel.'); } },
            { file: "features/reports-documents.md", get title() { return i18next.t('Reports & Documents'); }, get desc() { return i18next.t('Laporan dan dokumen PDF.'); } },
            { file: "features/whatsapp-gateway.md", get title() { return i18next.t('WhatsApp Gateway'); }, get desc() { return i18next.t('Integrasi whatsapp-web.js.'); } },
        ],
    },
];

export default function Documentation() {
    const { t } = useTranslation();
    return (
        <PublicLayout active="/dokumentasi">
            <Head title={t('Dokumentasi — Dikasir')} />

            {/* Header */}
            <section className="pt-20 pb-14 px-6 bg-gradient-to-b from-primary-50 dark:from-primary-950/40 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-sm font-medium mb-5 border border-primary-100 dark:border-primary-900">
                        <IconBook2 size={16} />
                        {t('Dokumentasi')}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                        {t('Dokumentasi Lengkap')}
                    </h1>
                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t('Semua panduan tersedia di repository GitHub — selalu terbaru, ikut berkembang bersama kode.')}
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="pb-20 px-6">
                <div className="max-w-5xl mx-auto space-y-14">
                    {categories.map((cat) => (
                        <div key={cat.title}>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-3">
                                <span className="w-8 h-1 rounded-full bg-gradient-to-r from-primary-500 to-primary-600" />
                                {cat.title}
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {cat.docs.map((doc) => (
                                    <a
                                        key={doc.file}
                                        href={`${DOCS_BASE}/${doc.file}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                {doc.title}
                                            </h3>
                                            <IconArrowRight size={16} className="text-slate-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            {doc.desc}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-8 text-center">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            {t('Dokumentasi kurang jelas?')}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            {t('Dokumentasi juga open source — perbaiki dan buat PR, atau tanya di GitHub Discussions.')}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href={`${GITHUB_URL}/blob/main/docs/README.md`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all"
                            >
                                <IconBrandGithub size={18} />
                                {t('Lihat semua docs di GitHub')}
                            </a>
                            <a
                                href={`${GITHUB_URL}/discussions`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary-300 transition-colors"
                            >
                                {t('Tanya di Discussions')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
