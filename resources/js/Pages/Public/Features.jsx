import { Head } from "@inertiajs/react";
import { useTranslation } from 'react-i18next';
import PublicLayout from "@/Layouts/PublicLayout";
import {
    IconShoppingCart,
    IconBuildingWarehouse,
    IconTruckDelivery,
    IconReportMoney,
    IconUsers,
    IconChartBar,
    IconShieldLock,
    IconCreditCard,
    IconCheck,
    IconArrowRight,
} from "@tabler/icons-react";
import i18n from '@/i18n';

const GITHUB_URL = "https://github.com/aryadwiputra/point-of-sales";

const modules = [
    {
        icon: IconShoppingCart,
        get title() { return i18n.t('POS & Transaksi'); },
        get desc() { return i18n.t('Inti dari Dikasir — kasir yang cepat, fleksibel, dan bisa diandalkan setiap hari.'); },
        screenshot: "/screenshots/02-pos-checkout.png",
        get features() { return [
            i18n.t('Pencarian produk via barcode / keyword'),
            i18n.t('Scan barcode dengan kamera (PWA)'),
            i18n.t('Cart multi-item dengan hold & resume'),
            i18n.t('Checkout multi-metode: tunai, transfer, Midtrans, Xendit, pay later'),
            i18n.t('Multi-satuan produk (pcs, box, kg, karton) dengan konversi stok'),
            i18n.t('Promo engine: diskon, qty break, bundle, buy-x-get-y'),
            i18n.t('Persetujuan diskon (approval workflow)'),
            i18n.t('Cetak struk thermal 58/80mm (WebUSB)'),
            i18n.t('Offline mode — transaksi tetap jalan tanpa internet'),
        ]; },
    },
    {
        icon: IconBuildingWarehouse,
        get title() { return i18n.t('Inventory & Multi-Warehouse'); },
        get desc() { return i18n.t('Kontrol penuh atas stok di semua gudang dan cabang.'); },
        screenshot: "/screenshots/07-warehouses.png",
        get features() { return [
            i18n.t('Produk, kategori, dan barcode'),
            i18n.t('Stok terpisah per gudang/cabang'),
            i18n.t('Transfer stok antar warehouse (draft → send → receive)'),
            i18n.t('Stock opname per warehouse'),
            i18n.t('Riwayat mutasi stok lengkap'),
            i18n.t('Tracking batch & expiry date (FEFO)'),
            i18n.t('Composite products / kits'),
            i18n.t('Reorder point + rekomendasi PO otomatis'),
            i18n.t('Notifikasi stok menipis'),
        ]; },
    },
    {
        icon: IconTruckDelivery,
        get title() { return i18n.t('Purchasing & Supplier'); },
        get desc() { return i18n.t('Rantai pengadaan yang rapi dari PO sampai hutang supplier.'); },
        screenshot: "/screenshots/09-purchase-orders.png",
        get features() { return [
            i18n.t('Purchase Order (draft → ordered → partial → completed)'),
            i18n.t('Goods Receiving dengan input batch'),
            i18n.t('Supplier Returns'),
            i18n.t('Kelola data supplier'),
            i18n.t('Hutang supplier (payables) dengan aging analysis'),
        ]; },
    },
    {
        icon: IconReportMoney,
        get title() { return i18n.t('Finance & Piutang'); },
        get desc() { return i18n.t('Arus uang terkontrol — piutang, hutang, dan pajak dalam satu tempat.'); },
        screenshot: "/screenshots/12-receivables.png",
        get features() { return [
            i18n.t('Piutang pelanggan dengan partial payment'),
            i18n.t('Aging analysis + catatan penagihan'),
            i18n.t('Hutang supplier & pembayaran'),
            i18n.t('PPN 11% (exclusive/inclusive) & data NPWP'),
            i18n.t('Customer portal: pelanggan lihat invoice & bayar online'),
        ]; },
    },
    {
        icon: IconUsers,
        get title() { return i18n.t('CRM & Loyalty'); },
        get desc() { return i18n.t('Tumbuhkan bisnis dengan pelanggan yang kembali lagi.'); },
        screenshot: "/screenshots/19-members.png",
        get features() { return [
            i18n.t('Manajemen customer + wilayah Indonesia'),
            i18n.t('Member tiers (regular, silver, gold, platinum)'),
            i18n.t('Poin loyalty (earn & redeem)'),
            i18n.t('Voucher pelanggan'),
            i18n.t('Segmentasi otomatis (manual & rule-based)'),
            i18n.t('Campaign automation: reminder & promo'),
            i18n.t('WhatsApp Gateway: struk, reminder, dan promo otomatis'),
        ]; },
    },
    {
        icon: IconChartBar,
        get title() { return i18n.t('Laporan & Insight'); },
        get desc() { return i18n.t('Keputusan bisnis berbasis data, bukan perasaan.'); },
        screenshot: "/screenshots/15-sales-report.png",
        get features() { return [
            i18n.t('Laporan penjualan dengan filter & ringkasan'),
            i18n.t('Laporan profit & margin analysis'),
            i18n.t('Advanced insights: jam sibuk, performa kasir, repeat customer'),
            i18n.t('PDF invoice, receipt (80/58mm), shipping label'),
            i18n.t('PDF piutang & hutang'),
            i18n.t('Export ke Excel (produk, customer, transaksi)'),
        ]; },
    },
    {
        icon: IconShieldLock,
        get title() { return i18n.t('Admin & Keamanan'); },
        get desc() { return i18n.t('Siapa punya akses apa, dan siapa mengubah apa — selalu jelas.'); },
        screenshot: "/screenshots/31-audit-logs.png",
        get features() { return [
            i18n.t('RBAC penuh: users, roles, permissions'),
            i18n.t('Audit log with before/after snapshot'),
            i18n.t('Step-up authentication untuk aksi sensitif'),
            i18n.t('Import produk & customer dari Excel'),
            i18n.t('App versioning terpusat (APP_VERSION)'),
            i18n.t('Manajemen shift kasir'),
        ]; },
    },
    {
        icon: IconCreditCard,
        get title() { return i18n.t('Payment & Pengaturan'); },
        get desc() { return i18n.t('Terima pembayaran apa pun yang pelanggan Anda pakai.'); },
        screenshot: "/screenshots/24-payment-settings.png",
        get features() { return [
            i18n.t('Payment gateway: Midtrans & Xendit'),
            i18n.t('Bank accounts untuk transfer manual'),
            i18n.t('Multi price list per kelompok pelanggan'),
            i18n.t('Sales target & store profile'),
            i18n.t('Pengaturan printer & pajak'),
            i18n.t('Multi-bahasa: Indonesia & English'),
        ]; },
    },
];

export default function Features() {
    const { t } = useTranslation();
    return (
        <PublicLayout active="/fitur">
            <Head title={t('Fitur Lengkap — Dikasir')} />

            {/* Header */}
            <section className="pt-20 pb-14 px-6 bg-gradient-to-b from-primary-50 dark:from-primary-950/40 to-transparent">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                        {t('Fitur Lengkap untuk Bisnis Nyata')}
                    </h1>
                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        {t('44+ modul terintegrasi dalam 8 area — dari kasir harian sampai analitik lanjutan, semua gratis dan open source.')}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {modules.map((m) => (
                            <a
                                key={m.title}
                                href={`#${m.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                className="px-4 py-2 text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                                {m.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto space-y-20">
                    {modules.map((mod, idx) => (
                        <div
                            key={mod.title}
                            id={mod.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                            className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
                        >
                            {/* Text */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                                        <mod.icon size={22} className="text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                        {mod.title}
                                    </h2>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-5">
                                    {mod.desc}
                                </p>
                                <ul className="space-y-2.5">
                                    {mod.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5">
                                            <IconCheck
                                                size={18}
                                                className="text-emerald-500 mt-0.5 shrink-0"
                                            />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Screenshot */}
                            <div className="flex-1 w-full">
                                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
                                    <img
                                        src={mod.screenshot}
                                        alt={t('Screenshot {{0}}', { 0: mod.title })}
                                        className="w-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="pb-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            {t('Ada fitur yang kamu butuhkan?')}
                        </h2>
                        <p className="text-slate-400 mb-6">
                            {t('Karena open source, fitur baru bisa datang dari siapa saja — termasuk kamu.')}
                        </p>
                        <a
                            href={`${GITHUB_URL}/issues`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all"
                        >
                            {t('Ajukan ide fitur di GitHub')}
                            <IconArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
