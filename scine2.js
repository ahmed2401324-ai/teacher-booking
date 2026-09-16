document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // ⚠️ اكتب رقم واتساب أختك هنا بكود الدولة (مثلاً لمصر ابدأ بـ 20 ثم الرقم)
  let teacherPhoneNumber = "01090084253";

  // قراءة البيانات من الحقول
  let studentName = document.getElementById("studentName").value;
  let studentPhone = document.getElementById("studentPhone").value;
  let parentPhone = document.getElementById("parentPhone").value;
  let grade = document.getElementById("grade").value;
  let timeSlot = document.getElementById("timeSlot").value;

  // تجهيز الرسالة
  let message =
    `مرحباً أستاذة، أرغب في حجز درس:%0A` +
    `👤 *اسم الطالب:* ${studentName}%0A` +
    `📱 *رقم الطالب:* ${studentPhone}%0A` +
    `📞 *رقم ولي الأمر:* ${parentPhone}%0A` +
    `📚 *الصف الدراسي:* ${grade}%0A` +
    `⏰ *الموعد المختار:* ${timeSlot}`;

  // فتح محادثة الواتساب فوراً بالرسالة الجاهزة
  let whatsappURL = `https://wa.me/${teacherPhoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
});
