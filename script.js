// Daftar chord dalam urutan semitone
const chords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Fungsi untuk transpose chord
function transpose(step) {
  const chordsElements = document.querySelectorAll('.chords'); // Ambil semua elemen dengan class 'chords'
  
  chordsElements.forEach(chordsElement => {
    const originalText = chordsElement.innerText;
    
    // Gunakan RegExp untuk mengganti setiap chord tanpa memodifikasi spasi
    const transposedText = originalText.replace(/[A-G][#b]?m?/g, (chord) => {
      const baseChord = chord.match(/[A-G][#b]?/)[0];
      const chordIndex = chords.indexOf(baseChord);
      if (chordIndex === -1) return chord; // Jika chord tidak ditemukan, kembalikan aslinya
      const newIndex = (chordIndex + step + chords.length) % chords.length;
      return chord.replace(baseChord, chords[newIndex]);
    });

    chordsElement.innerText = transposedText; // Kembalikan teks yang telah di-transpose
  });
}
