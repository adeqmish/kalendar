// =================================================================
// 1. TETAPAN SISTEM
// =================================================================
let hijriAdjustment = -1; // -1: Malaysia (Biasanya), 0: Saudi

// =================================================================
// 2. DATA SINGKATAN BULAN ISLAM (UNTUK DALAM KOTAK TARIKH)
// =================================================================
const hijriShortMap = {
    "Muharram": "MUH",
    "Safar": "SAF",
    "Rabiulawal": "R.AWAL",
    "Rabiulakhir": "R.AKHIR",
    "Jamadilawal": "J.AWAL",
    "Jamadilakhir": "J.AKHIR",
    "Rejab": "REJ",
    "Syaaban": "SYA",
    "Ramadan": "RAM",
    "Syawal": "SYAW",
    "Zulkaedah": "Z.KAED",
    "Zulhijjah": "Z.HIJJ"
};

// =================================================================
// 3. DATA CUTI
// =================================================================

// A. CUTI TETAP (Berulang Setiap Tahun pada Tarikh Sama)
const fixedHolidays = {
    "0-1": "Tahun Baru", "0-14": "Keputeraan YDPB N9", "1-1": "Hari Wilayah",
    "2-4": "Pertabalan Sultan Terengganu", "2-23": "Sultan Johor", 
    "3-15": "Bandaraya Melaka", "3-26": "Sultan Terengganu", "4-1": "Hari Pekerja",
    "4-17": "Raja Perlis", "4-30": "Pesta Kaamatan", "4-31": "Kaamatan (Ke-2)",
    "5-1": "Hari Gawai", "5-2": "Gawai (Ke-2)", "5-21": "Sultan Kedah",
    "6-7": "Warisan Georgetown", "6-30": "Sultan Pahang", "7-31": "Hari Kebangsaan",
    "8-16": "Hari Malaysia", "10-11": "Sultan Kelantan", "11-11": "Sultan Selangor",
    "11-25": "Hari Krismas"
};

// B. CUTI BERGERAK (2025 - 2030)
// Tarikh 2026 dikemaskini ikut Surat Siaran KPM [cite: 15]
const dynamicHolidays = {
    "2025": {
        "0-29": "Tahun Baru Cina", "0-30": "TBC Hari Kedua",
        "0-27": "Israk Mikraj", "1-11": "Thaipusam", 
        "2-2": "Awal Ramadan", "2-17": "Nuzul Al-Quran",
        "2-31": "Hari Raya Aidilfitri", "3-1": "Aidilfitri Hari Kedua",
        "4-13": "Hari Wesak", "5-2": "Keputeraan YDPA Agong", 
        "5-6": "Hari Raya Aidiladha", "5-27": "Awal Muharram", 
        "8-9": "Maulidur Rasul", "9-20": "Deepavali"
    },
    "2026": {
        // Tarikh Rasmi KPM [cite: 15]
        "1-17": "Tahun Baru Cina", "1-18": "TBC Hari Kedua",
        "2-21": "Hari Raya Aidilfitri", "2-22": "Aidilfitri Hari Kedua",
        "10-8": "Deepavali",
        
        // Anggaran / Kalendar Islam Lain
        "0-17": "Israk Mikraj", "1-1": "Thaipusam", 
        "4-27": "Hari Raya Aidiladha", "4-31": "Hari Wesak", 
        "5-1": "Keputeraan YDPA Agong", "5-16": "Awal Muharram", 
        "7-25": "Maulidur Rasul"
    },
    "2027": {
        "1-6": "Tahun Baru Cina", "1-7": "TBC Hari Kedua",
        "2-10": "Hari Raya Aidilfitri", "2-11": "Aidilfitri Hari Kedua",
        "4-16": "Hari Raya Aidiladha", "9-29": "Deepavali"
    },
    "2028": {
        "0-26": "Tahun Baru Cina", "0-27": "TBC Hari Kedua",
        "1-27": "Hari Raya Aidilfitri", "1-28": "Aidilfitri Hari Kedua",
        "4-5": "Hari Raya Aidiladha", "9-17": "Deepavali"
    },
    "2029": {
        "1-13": "Tahun Baru Cina", "1-14": "TBC Hari Kedua",
        "1-15": "Hari Raya Aidilfitri", "1-16": "Aidilfitri Hari Kedua",
        "3-24": "Hari Raya Aidiladha", "10-5": "Deepavali"
    },
    "2030": {
        "1-3": "Tahun Baru Cina", "1-4": "TBC Hari Kedua",
        "1-4": "Hari Raya Aidilfitri", "1-5": "Aidilfitri Hari Kedua",
        "3-13": "Hari Raya Aidiladha", "9-26": "Deepavali"
    }
};

// C. GAMBAR CUTI TETAP
const holidayImages = {
    "0-1": "newyear.png", "0-14": "n9.png", "1-1": "wilayah.png",
    "2-4": "terengganu.png", "2-23": "johor.png", "3-15": "melaka.png",
    "3-26": "terengganu.png", "4-1": "labour.png", "4-17": "perlis.png",
    "4-30": "kaamatan.png", "4-31": "kaamatan.png", "5-1": "gawai.png",
    "5-2": "gawai.png", "5-21": "kedah.png", "6-7": "penang.png",
    "6-30": "pahang.png", "7-31": "merdeka.png", "8-16": "malaysia.png",
    "10-11": "kelantan.png", "11-11": "selangor.png", "11-25": "christmas.png"
};

// D. GAMBAR PINTAR (CUTI BERGERAK)
const dynamicImageMap = {
    "Tahun Baru Cina": "cny.png", "TBC Hari Kedua": "cny.png",
    "Hari Raya Aidilfitri": "raya.png", "Aidilfitri Hari Kedua": "raya.png",
    "Hari Raya Aidiladha": "haji.png", "Deepavali": "deepavali.png"
};

// E. DATA CUTI SEKOLAH (2025 & 2026)
// Data 2026 gabungan Kumpulan A & B [cite: 5, 11]
const schoolHolidayData = {
    "2025": [
        { m: 0, start: 18, end: 31 }, { m: 1, start: 1, end: 16 },  
        { m: 4, start: 24, end: 31 }, { m: 5, start: 1, end: 2 },   
        { m: 8, start: 13, end: 21 }, { m: 11, start: 20, end: 31 } 
    ],
    "2026": [
        // Cuti Penggal 1: Mac 20 - Mac 29 [cite: 5, 11]
        { m: 2, start: 20, end: 29 },
        // Cuti Pertengahan Tahun: Mei 22 - Jun 7 [cite: 5, 11]
        { m: 4, start: 22, end: 31 }, { m: 5, start: 1, end: 7 },
        // Cuti Penggal 2: Ogos 28 - Sept 6 [cite: 5, 11]
        { m: 7, start: 28, end: 31 }, { m: 8, start: 1, end: 6 },
        // Cuti Akhir Tahun: Dis 4 - Dis 31 [cite: 5, 11]
        { m: 11, start: 4, end: 31 }
    ]
};

const monthNames = [
    "JANUARI", "FEBRUARI", "MAC", "APRIL", "MEI", "JUN",
    "JULAI", "OGOS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DISEMBER"
];

// =================================================================
// 4. FORMATTER & HELPERS
// =================================================================

const hijriHeaderFormatter = new Intl.DateTimeFormat('ms-MY-u-ca-islamic-umalqura', {
    day: 'numeric', month: 'long', year: 'numeric'
});
const hijriDayFormatter = new Intl.DateTimeFormat('ms-MY-u-ca-islamic-umalqura-nu-latn', {
    day: 'numeric'
});

const todayDate = new Date();
let currentMonth = todayDate.getMonth();
let currentYear = todayDate.getFullYear();

// FUNGSI HEADER: NAMA PENUH (JAMADILAKHIR - REJAB 1447H)
function getHijriHeaderFull(month, year) {
    const dateStart = new Date(year, month, 1 + hijriAdjustment);
    const dateEnd = new Date(year, month, 28 + hijriAdjustment);
    
    try {
        const partsStart = hijriHeaderFormatter.formatToParts(dateStart);
        const partsEnd = hijriHeaderFormatter.formatToParts(dateEnd);
        
        const mStart = partsStart.find(p => p.type === 'month').value.toUpperCase();
        const mEnd = partsEnd.find(p => p.type === 'month').value.toUpperCase();
        const hYear = partsStart.find(p => p.type === 'year').value;

        if (mStart === mEnd) return `${mStart} ${hYear}H`;
        return `${mStart} - ${mEnd} ${hYear}H`;
    } catch (e) { return "HIJRI"; }
}

// FUNGSI KOTAK TARIKH: NOMBOR + SHORTFORM (Contoh: "1 REJ")
function getHijriDayText(day, month, year) {
    try {
        const date = new Date(year, month, day + hijriAdjustment);
        const parts = hijriHeaderFormatter.formatToParts(date);
        const longMonth = parts.find(p => p.type === 'month').value;
        const hDay = parts.find(p => p.type === 'day').value;

        // Tukar jadi Shortform guna Map
        const shortMonth = hijriShortMap[longMonth] || longMonth.substring(0,3).toUpperCase();
        
        return `${hDay} ${shortMonth}`; 
    } catch (e) { return ""; }
}

// =================================================================
// 5. POPUP & INIT
// =================================================================

function showPopup(title, msg) {
    const overlay = document.getElementById('custom-popup');
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-message').innerText = msg;
    overlay.classList.add('active');
}
function closePopup() { document.getElementById('custom-popup').classList.remove('active'); }
document.getElementById('custom-popup').addEventListener('click', (e) => { 
    if (e.target.id === 'custom-popup') closePopup(); 
});

function init() {
    renderCalendar(currentMonth, currentYear);
    document.getElementById('prevBtn').addEventListener('click', () => changeMonth(-1));
    document.getElementById('nextBtn').addEventListener('click', () => changeMonth(1));
}

function goToToday() {
    const now = new Date();
    currentMonth = now.getMonth();
    currentYear = now.getFullYear();
    renderCalendar(currentMonth, currentYear);
}

function changeMonth(step) {
    currentMonth += step;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; } 
    else if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentMonth, currentYear);
}

function getHolidayName(day, month, year) {
    const key = `${month}-${day}`;
    if (fixedHolidays[key]) return fixedHolidays[key];
    if (dynamicHolidays[year] && dynamicHolidays[year][key]) return dynamicHolidays[year][key];
    return null;
}

function isSchoolHoliday(day, month, year) {
    if (schoolHolidayData[year]) {
        return schoolHolidayData[year].some(r => r.m === month && day >= r.start && day <= r.end);
    }
    return false;
}

// =================================================================
// 6. RENDER CALENDAR
// =================================================================

function renderCalendar(month, year) {
    const grid = document.getElementById('calendar-grid');
    const displayMonth = document.getElementById('display-month');
    const displayHijri = document.getElementById('display-hijri');
    const holidayList = document.getElementById('holiday-list');
    
    const now = new Date();
    
    grid.innerHTML = '';
    holidayList.innerHTML = '';
    
    // Header Paparan
    displayMonth.innerText = `${monthNames[month]} ${year}`;
    displayHijri.innerText = getHijriHeaderFull(month, year);
    
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let activeHolidays = [];

    // Padding
    for (let i = 0; i < firstDayIndex; i++) {
        const padding = document.createElement('div');
        grid.appendChild(padding);
    }

    // Loop Hari
    for (let d = 1; d <= daysInMonth; d++) {
        const box = document.createElement('div');
        box.className = 'date-box';
        
        const dayOfWeek = new Date(year, month, d).getDay(); 
        const holidayName = getHolidayName(d, month, year);
        const schoolHol = isSchoolHoliday(d, month, year);
        const hijriText = getHijriDayText(d, month, year);
        let isPublicHoliday = !!holidayName;

        if (d === now.getDate() && month === now.getMonth() && year === now.getFullYear()) {
            box.classList.add('is-today');
        }
        if (schoolHol) box.classList.add('is-school-holiday');
        if (isPublicHoliday) {
            box.classList.add('is-holiday');
            activeHolidays.push({ date: d, name: holidayName });
        }
        if (dayOfWeek === 6) box.classList.add('is-saturday');
        if (dayOfWeek === 0) {
            box.classList.add('day-sunday');
            if(!isPublicHoliday) box.classList.add('is-holiday');
        }

        // HTML Content
        let html = `<span class="date-number">${d}</span>`;      
        html += `<span class="hijri-number">${hijriText}</span>`; 

        if (isPublicHoliday) html += `<div class="holiday-dot"></div>`;
        
        // Image Logic
        let specialImage = null;
        if (holidayImages[`${month}-${d}`]) {
            specialImage = holidayImages[`${month}-${d}`];
        } else if (holidayName && dynamicImageMap[holidayName]) {
            specialImage = dynamicImageMap[holidayName];
        }

        if (specialImage) {
            html += `<img src="assets/${specialImage}" class="horse-icon-grid" alt="Holiday">`;
        } else if (dayOfWeek === 0 || dayOfWeek === 6) {
            html += `<img src="assets/kuda.png" class="horse-icon-grid" alt="Race">`;
        }

        box.innerHTML = html;
        
        // Click Logic
        if (box.classList.contains('is-today')) {
            box.onclick = () => showPopup(`📅 Hari Ini`, `${d} ${monthNames[month]} ${year}\n${hijriText} (Hijrah)\nSemoga ceria!`);
        } else if (isPublicHoliday) {
            box.onclick = () => showPopup(`🎉 Cuti Umum`, `${holidayName}\n(${d} ${monthNames[month]} / ${hijriText})`);
        } else if (schoolHol) {
            box.onclick = () => showPopup(`🏫 Cuti Sekolah`, `Tarikh ini jatuh dalam musim cuti sekolah.`);
        }

        grid.appendChild(box);
    }

    if (activeHolidays.length === 0) {
        let msg = "TIADA CUTI UMUM BULAN INI.";
        if (!dynamicHolidays[year] && year > 2026) msg = "DATA TAHUN INI BELUM DIKEMASKINI.";
        holidayList.innerHTML = `<li style="padding:15px; color:#555; text-align:center;">${msg}</li>`;
    } else {
        activeHolidays.forEach(h => {
            const li = document.createElement('li');
            li.className = 'holiday-item';
            li.innerHTML = `
                <div class="date-pill">${h.date}</div>
                <div class="holiday-name">${h.name}</div>
            `;
            holidayList.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
