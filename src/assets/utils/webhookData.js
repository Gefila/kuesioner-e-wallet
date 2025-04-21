const data = [
    {
        level: 1,
        jawaban: [
            {
                pilihan: ["Keamanan", "Biaya"],
                tingkatKepentingan: 0,
                selected: "Keamanan",
            },
            {
                pilihan: ["Keamanan", "Kemudahan Penggunaan"],
                tingkatKepentingan: 0,
                selected: "Kemudahan Penggunaan",
            },
            {
                pilihan: ["Keamanan", "Fitur"],
                tingkatKepentingan: 0,
                selected: "Keamanan",
            },
            {
                pilihan: ["Keamanan", "Customer Service"],
                tingkatKepentingan: 0,
                selected: "Customer Service",
            },
            {
                pilihan: ["Biaya", "Kemudahan Penggunaan"],
                tingkatKepentingan: 0,
                selected: "Biaya",
            },
            {
                pilihan: ["Biaya", "Fitur"],
                tingkatKepentingan: 0,
                selected: "Fitur",
            },
            {
                pilihan: ["Biaya", "Customer Service"],
                tingkatKepentingan: 0,
                selected: "Biaya",
            },
            {
                pilihan: ["Kemudahan Penggunaan", "Fitur"],
                tingkatKepentingan: 0,
                selected: "Fitur",
            },
            {
                pilihan: ["Kemudahan Penggunaan", "Customer Service"],
                tingkatKepentingan: 0,
                selected: "Kemudahan Penggunaan",
            },
            {
                pilihan: ["Fitur", "Customer Service"],
                tingkatKepentingan: 0,
                selected: "Customer Service",
            },
        ],
    },
    {
        level: 2,
        kriteria: [
            {
                kriteriaName: "Keamanan",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: [
                            "Proteksi Data Pengguna",
                            "Keamanan Transaksi",
                        ],
                        selected: "Proteksi Data Pengguna",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Proteksi Data Pengguna", "Keamanan Saldo"],
                        selected: "Keamanan Saldo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Keamanan Transaksi", "Keamanan Saldo"],
                        selected: "Keamanan Saldo",
                    },
                ],
            },
            {
                kriteriaName: "Biaya",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Biaya Top Up", "Biaya Transfer"],
                        selected: "Biaya Transfer",
                    },
                ],
            },
            {
                kriteriaName: "Kemudahan Penggunaan",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: [
                            "UI & UX",
                            "Kemudahan Registrasi dan Verifikasi",
                        ],
                        selected: "Kemudahan Registrasi dan Verifikasi",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["UI & UX", "Kecepatan Proses Transaksi"],
                        selected: "UI & UX",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: [
                            "Kemudahan Registrasi dan Verifikasi",
                            "Kecepatan Proses Transaksi",
                        ],
                        selected: "Kecepatan Proses Transaksi",
                    },
                ],
            },
            {
                kriteriaName: "Fitur",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["QR & Scan To pay", "Promo & Cashback"],
                        selected: "QR & Scan To pay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: [
                            "QR & Scan To pay",
                            "Kerjasama Dengan Merchant & E-Commerce",
                        ],
                        selected: "QR & Scan To pay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["QR & Scan To pay", "Kelengkapan Fitur"],
                        selected: "Kelengkapan Fitur",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: [
                            "Promo & Cashback",
                            "Kerjasama Dengan Merchant & E-Commerce",
                        ],
                        selected: "Promo & Cashback",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Promo & Cashback", "Kelengkapan Fitur"],
                        selected: "Kelengkapan Fitur",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: [
                            "Kerjasama Dengan Merchant & E-Commerce",
                            "Kelengkapan Fitur",
                        ],
                        selected: "Kelengkapan Fitur",
                    },
                ],
            },
            {
                kriteriaName: "Customer Service",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: [
                            "Responsivitas Layanan",
                            "Kualitas Penangan Masalah",
                        ],
                        selected: "Kualitas Penangan Masalah",
                    },
                ],
            },
        ],
    },
    {
        level: 3,
        kriteria: [
            {
                subCriteriaName: "Proteksi Data Pengguna",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "Gopay",
                    },
                ],
            },
            {
                subCriteriaName: "Keamanan Transaksi",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "Keamanan Saldo",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "Biaya Top Up",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "Biaya Transfer",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "UI & UX",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "Gopay",
                    },
                ],
            },
            {
                subCriteriaName: "Kemudahan Registrasi dan Verifikasi",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "Kecepatan Proses Transaksi",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "QR & Scan To pay",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "Promo & Cashback",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "Kerjasama Dengan Merchant & E-Commerce",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "Gopay",
                    },
                ],
            },
            {
                subCriteriaName: "Kelengkapan Fitur",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "Responsivitas Layanan",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "Ovo",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
            {
                subCriteriaName: "Kualitas Penangan Masalah",
                jawaban: [
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Ovo"],
                        selected: "Dana",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Dana", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "Gopay"],
                        selected: "Gopay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Ovo", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                    {
                        tingkatKepentingan: 0,
                        pilihan: ["Gopay", "ShopeePay"],
                        selected: "ShopeePay",
                    },
                ],
            },
        ],
    },
];

export function webhookData() {
    const level1Value = data[0].jawaban.map((item) => {
        return  `${item.pilihan[0]} ${item.selected === item.pilihan[0] ? '🟢 🔴' : '🔴 🟢'} ${item.pilihan[1]} = ${item.tingkatKepentingan}`
        
    });

    const level2 = data[1].kriteria.map((item) => {
        const value = item.jawaban.map((subItem) => {   
            return `${subItem.pilihan[0]} ${subItem.selected === subItem.pilihan[0] ? '🟢 🔴' : '🔴 🟢'} ${subItem.pilihan[1]} = ${subItem.tingkatKepentingan}`
        });
        return {
            name : `Berdasarkan kriteria “${item.kriteriaName}”, sub-kriteria manakah yang lebih penting dari perbandingan sub-kriteria – sub-kriteria berikut ?`,
            value: value.join('\n')
        }
    });

    console.log(level2)

    const level3 = data[2].kriteria.map((item) => {
        const value = item.jawaban.map((subItem) => {   
            return `${subItem.pilihan[0]} ${subItem.selected === subItem.pilihan[0] ? '🟢 🔴' : '🔴 🟢'} ${subItem.pilihan[1]} = ${subItem.tingkatKepentingan}`
        });
        return {
            name : `Berdasarkan sub-kriteria “${item.subCriteriaName}”, alternatif strategis manakah yang lebih penting dari perbandingan alternatif-alternatif strategis berikut ini?`,
            value: value.join('\n')
        }
    });

    const webhook = {
        content:
            "**KUISIONER PEMILIHAN E-WALLET TERBAIK UNTUK TRANSAKSI DIGITAL BAGI MAHASISWA**",
        embeds: [
            {
                title: "Indentitas Responden",
                description:
                    "**Nama: Gefila Zona Pranata**\n**Jenis Kelamin : Laki-Laki**\n**Asal Kampus: ISB Atma Luhur**",
                color: 16722731,
                timestamp: "2025-04-21T08:07:00.000Z",
            },
            {
                title: "Level 1 - Perbandingan Kriteria",
                color: 5814783,
                fields: [
                    {
                        name: "Dalam menentukan e-Wallet Terbaik Untuk Transaksi Digital Bagi Mahasiswa, kriteria manakah yang lebih penting dibandingkan kriteria-kriteria berikut ?",
                        value: level1Value.join("\n"),
                    },
                ],
            },
            {
                title: "LEVEL 2 : PERBANDINGAN SUB-KRITERIA",
                color: 5814783,
                fields: level2,
            },
            {
                title: "LEVEL 3 : PERBANDINGAN ALTERNATIF STRATEGIS",
                color: 5814783,
                fields: level3,
            },
        ],
        attachments: [],
    };

    return webhook;
}
