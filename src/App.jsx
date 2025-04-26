import { useEffect, useState } from "react";
import Level1 from "./components/pages/Level1Page";
import Level2 from "./components/pages/Level2Page";
import Level3 from "./components/pages/Level3Page";
import { webhookData } from "./assets/utils/webhookData";
import FormIdentitas from "./components/FormIdentitas";
import DialogPetunjuk from "./components/DialogPetunjuk";

function App() {
    const [responses, setResponses] = useState([]);
    const [level, setLevel] = useState(0);
    const [identitas, setIdentitas] = useState({
        nama: "",
        jenisKelamin: "",
        asalKampus: "",
    });

    const [responsesLevel1, setResponsesLevel1] = useState({
        level: 1,
        jawaban: [],
    });

    const [responsesLevel2, setResponsesLevel2] = useState({
        level: 2,
        kriteria: [],
    });

    const [responsesLevel3, setResponsesLevel3] = useState({
        level: 3,
        kriteria: [],
    });

    const [hierarchyData, setHierarchyData] = useState({
        criteria: [
            {
                id: 1,
                name: "Keamanan",
                penjelasan:
                    "Keamanan, Mengacu kepada perlindungan akun, data pribadi, dan keuangan yang ada pada e-wallet.",
                subCriteria: [
                    {
                        id: 1,
                        name: "Proteksi Data Pengguna",
                        penjelasan:
                            "Proteksi Data Pengguna, Adanya perlindungan data pribadi pengguna dari perusahaan e-wallet tersebut. Misalnya pin atau keamanan biometrik untuk login dan membuka aplikasi, sensor untuk nomor telfon, nama lengkap, jumlah saldo, enkripsi data, kebijakan privasi, izin aplikasi, dll.",
                    },
                    {
                        id: 2,
                        name: "Keamanan Saldo",
                        penjelasan:
                            "Keamanan Saldo, Seberapa aman saldo yang disimpan pada e-wallet tersebut. Misalnya terjamin dari kehilangan saldo tiba-tiba tanpa alasan yang jelas meskipun e wallet lama tidak dipakai. ",
                    },
                ],
            },
            {
                id: 2,
                name: "Kemudahan Penggunaan",
                penjelasan:
                    "Kemudahan Penggunaan, Mengacu pada kemudahan aplikasi e-wallet tersebut digunakan. Menu dan fitur yang diberikan mudah untuk dipelajari dan dimengerti.",
                subCriteria: [
                    {
                        id: 3,
                        name: "UI & UX",
                        penjelasan:
                            "UI & UX, UI adalah tampilan atau design aplikasi e-wallet seperti warna, penempatan menu, tombol, tulisan, dll. UX adalah pengalaman pengguna dalam memakai aplikasi yang mudah aplikasi dipelajari, dipahami, dan digunakan. ",
                    },
                    {
                        id: 4,
                        name: "Kemudahan Registrasi dan Verifikasi",
                        penjelasan:
                            "Kemudahan Registrasi dan Verifikasi, Proses pendaftaran akun e-wallet untuk pengguna baru dan upgrade akun ke versi premium atau plus untuk mendapatkan fitur dan limit saldo tambahan. ",
                    },
                    {
                        id: 5,
                        name: "Kecepatan Proses Transaksi",
                        penjelasan:
                            "Kecepatan Proses Transaksi, Kecepatan e-wallet ketika melakukan transaksi seperti top up saldo, pembayaran via scan QR-code/ QRIS, pembayaran e-commerce via transfer ke bank, ataupun transfer antara pengguna e-wallet yang sama atau berbeda aplikasi. ",
                    },
                ],
            },
            {
                id: 3,
                name: "Fitur",
                penjelasan:
                    "Fitur, Mencakup kelengkapan layanan yang ditawarkan oleh e-wallet untuk memberikan nilai tambah dan meningkatkan kenyamanan pengguna dalam berbagai transaksi. Termasuk juga kerja sama dengan berbagai perusahaan dan e-commerce.",
                subCriteria: [
                    {
                        id: 6,
                        name: "Promo & Cashback",
                        penjelasan:
                            "Promo & Cashback, Penawaran menarik yang ditawarkan e-wallet seperti diskon, cashback, poin reward, free biaya transfer, dsb. ",
                    },
                    {
                        id: 7,
                        name: "Kerjasama Dengan Merchant & E-Commerce",
                        penjelasan:
                            "Kerjasama Dengan Merchant & E-Commerce, Perusahaan e-wallet bekerja sama dengan merchant, online shop, atau minimarket tertentu agar pengguna dapat langsung melakukan pembayaran menggunakan e-wallet tersebut. ",
                    },
                    {
                        id: 8,
                        name: "Kelengkapan Fitur",
                        penjelasan:
                            "Kelengkapan Fitur, Ketersediaan Fitur-fitur atau layanan tertentu pada aplikasi e-wallet untuk menunjang kenyamanan dan fleksibilitas pengguna dalam bertransaksi. Seperti fitur top up untuk kebutuhan sehari hari seperti pulsa, paket data, token listrik, dll. ",
                    },
                ],
            },
            {
                id: 4,
                name: "Biaya Admin",
                penjelasan:
                    "Biaya Admin, Merujuk pada segala biaya yang dikenakan kepada pengguna saat menggunakan e-wallet. Bisa berupa biaya transfer ke bank, biaya top-up, biaya penarikan tunai, atau potongan untuk transaksi tertentu.",
                subCriteria: [],
            },
            {
                id: 5,
                name: "Customer Service",
                penjelasan:
                    "Customer Service, Kualitas dukungan dan layanan bantuan yang diberikan oleh penyedia e-wallet kepada penggunanya, khususnya ketika mengalami kendala.",
                subCriteria: [],
            },
        ],
        alternatives: [
            { id: 1, name: "Dana" },
            { id: 2, name: "Ovo" },
            { id: 3, name: "Gopay" },
            { id: 4, name: "ShopeePay" },
        ],
    });

    function generatePairs(criteria) {
        const pairs = [];
        for (let i = 0; i < criteria.length; i++) {
            for (let j = i + 1; j < criteria.length; j++) {
                pairs.push([criteria[i], criteria[j]]);
            }
        }
        return pairs;
    }

    function handleLevelChange(newLevel) {
        setLevel(newLevel + 1);
    }

    async function handleSubmit() {
        const filterResponsesLevel2 = {
            ...responsesLevel2,
            kriteria: responsesLevel2.kriteria.filter(
                (item) => item !== undefined
            ),
        };
        const allResponses = [
            { ...responsesLevel1, level: 1 },
            { ...filterResponsesLevel2, level: 2 },
            { ...responsesLevel3, level: 3 },
        ];
        setResponses(allResponses);

        try {
            const dataToSend = webhookData(allResponses, identitas);
            const response = await fetch(
                "https://discord.com/api/webhooks/1364471453667295302/L9XQk1HxpksFWqqjVMQPtoCW-vD2ZzO-GR6GJuQyzbqusuktZBhlAZseqpbAiSV3IiAY",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                }
            );
            console.log(dataToSend);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Error sending data to Discord:", error);
        }

        setLevel(0);
        setIdentitas({
            nama: "",
            jenisKelamin: "",
            asalKampus: "",
        });
        setResponsesLevel1({
            level: 1,
            jawaban: [],
        });
        setResponsesLevel2({
            level: 2,
            kriteria: [],
        });
        setResponsesLevel3({
            level: 3,
            kriteria: [],
        });
    }

    useEffect(() => {}, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]"></div>
            {level === 0 ? (
                <FormIdentitas
                    identitas={identitas}
                    setIdentitas={setIdentitas}
                    handleLevelChange={handleLevelChange}
                    level={level}
                />
            ) : level === 1 ? (
                <Level1
                    hierarchyData={hierarchyData}
                    generatePairs={generatePairs}
                    responsesLevel1={responsesLevel1}
                    setResponsesLevel1={setResponsesLevel1}
                    handleLevelChange={handleLevelChange}
                />
            ) : level === 2 ? (
                <Level2
                    hierarchyData={hierarchyData}
                    generatePairs={generatePairs}
                    responsesLevel2={responsesLevel2}
                    setResponsesLevel2={setResponsesLevel2}
                    handleLevelChange={handleLevelChange}
                />
            ) : level === 3 ? (
                <Level3
                    hierarchyData={hierarchyData}
                    generatePairs={generatePairs}
                    responsesLevel3={responsesLevel3}
                    setResponsesLevel3={setResponsesLevel3}
                    handleSubmit={handleSubmit}
                />
            ) : null}
        </div>
    );
}

export default App;
