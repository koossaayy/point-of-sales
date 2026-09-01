import { Head } from "@inertiajs/react";
import { useTranslation } from '@/i18n';
import PublicLayout from "@/Layouts/PublicLayout";
import {
    IconHeart,
    IconGitBranch,
    IconTestPipe,
    IconListCheck,
    IconTerminal2,
    IconArrowRight,
    IconBrandGithub,
    IconShieldCheck,
} from "@tabler/icons-react";

const GITHUB_URL = "https://github.com/aryadwiputra/point-of-sales";

const setupCommands = `git clone https://github.com/aryadwiputra/point-of-sales
cd point-of-sales
cp .env.example .env
composer install && npm install
php artisan key:generate
php artisan migrate --seed
php artisan storage:link

# Jalankan di 2 terminal
npm run dev
php artisan serve`;

const checklist = [
    "Jalankan php artisan test — pastikan semua lulus",
    "Jalankan vendor/bin/pint untuk formatting kode",
    "Tulis deskripsi PR yang jelas (apa & mengapa)",
    "Referensikan issue yang dikerjakan (fixes #123)",
    "Sertakan screenshot sebelum/after untuk perubahan UI",
];

export default function Contributing() {
    const { t } = useTranslation();
    return (
        <PublicLayout active="/kontribusi">
            <Head title={t('Kontribusi — Dikasir')} />

            {/* Header */}
            <section className="pt-20 pb-14 px-6 bg-gradient-to-b from-primary-50 dark:from-primary-950/40 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-sm font-medium mb-5 border border-primary-100 dark:border-primary-900">
                        <IconHeart size={16} />
                        {t('Kontribusi')}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                        {t('Bantu Dikasir Tumbuh')}
                    </h1>
                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t('Open source hidup dari kontributor — laporan bug, perbaikan kode, dokumentasi, atau sekadar ide. Semua disambut!')}
                    </p>
                </div>
            </section>

            {/* Git Flow */}
            <section className="pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <IconGitBranch size={24} className="text-primary-500" />
                        {t('Git Workflow')}
                    </h2>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800/60 text-left">
                                    <th className="px-5 py-3 font-semibold text-slate-700 dark:text-slate-300">{t('Branch')}</th>
                                    <th className="px-5 py-3 font-semibold text-slate-700 dark:text-slate-300">{t('Fungsi')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td className="px-5 py-3 font-mono text-primary-600 dark:text-primary-400">main</td>
                                    <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{t('Production. Hanya dari merge release')}</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 font-mono text-primary-600 dark:text-primary-400">{t('development')}</td>
                                    <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{t('Integrasi. Semua feature branch merge ke sini')}</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 font-mono text-primary-600 dark:text-primary-400">{t('feature/*')}</td>
                                    <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{t('Kerja fitur baru. Branch dari development, PR ke development')}</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 font-mono text-primary-600 dark:text-primary-400">{t('fix/*')}</td>
                                    <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{t('Hotfix. Branch dari main, PR ke main + development')}</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 font-mono text-primary-600 dark:text-primary-400">{t('release/*')}</td>
                                    <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{t('Release candidate. Dari development, merge ke main + tag')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 rounded-xl bg-slate-100 dark:bg-slate-800/60 px-5 py-4 text-sm font-mono text-slate-600 dark:text-slate-300 text-center">
                        {t('feature/nama-fitur → development → release/x.y.z → main (tag vX.Y.Z)')}
                    </div>
                </div>
            </section>

            {/* Setup Dev */}
            <section className="pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <IconTerminal2 size={24} className="text-primary-500" />
                        {t('Setup Lingkungan Dev')}
                    </h2>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 overflow-hidden">
                        <pre className="text-sm text-slate-300 font-mono overflow-x-auto leading-relaxed">
                            {setupCommands}
                        </pre>
                    </div>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        {t('Data contoh (produk, transaksi, user) sudah termasuk via')}{" "}
                        <code className="font-mono text-primary-600 dark:text-primary-400">{t('migrate --seed')}</code>{t('. Akun default:')} <code className="font-mono">arya@gmail.com</code> {t('(admin) dan')}{" "}
                        <code className="font-mono">cashier@gmail.com</code> {t('(kasir), password:')}{" "}
                        <code className="font-mono">{t('password')}</code>.
                    </p>
                </div>
            </section>

            {/* Testing */}
            <section className="pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <IconTestPipe size={24} className="text-primary-500" />
                        {t('Testing')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                            <div className="font-mono text-sm text-primary-600 dark:text-primary-400 mb-1">{t('php artisan test')}</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {t('Test otomatis berjalan di SQLite in-memory — tidak butuh MySQL untuk mengetes.')}
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                            <div className="font-mono text-sm text-primary-600 dark:text-primary-400 mb-1">vendor/bin/pint</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {t('Format kode PHP otomatis sesuai standar Laravel.')}
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        {t('💡 Saat menulis test produk, set')} <code className="font-mono">{t('tax_rate=0')}</code> {t('agar grand_total tidak berubah oleh PPN.')}
                    </p>
                </div>
            </section>

            {/* PR Checklist */}
            <section className="pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <IconListCheck size={24} className="text-primary-500" />
                        {t('Checklist Pull Request')}
                    </h2>
                    <ul className="space-y-3">
                        {checklist.map((item) => (
                            <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                <IconShieldCheck size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                                <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-10 text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            {t('Siap Berkontribusi?')}
                        </h2>
                        <p className="opacity-90 mb-7">
                            {t('Mulai dari issue berlabel "good first issue" — atau baca panduan lengkap di CONTRIBUTING.md.')}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href={`${GITHUB_URL}/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                {t('Cari Good First Issue')}
                            </a>
                            <a
                                href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                            >
                                <IconBrandGithub size={18} />
                                {t('Baca CONTRIBUTING.md')}
                                <IconArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
