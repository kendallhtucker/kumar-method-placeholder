// Countdown to launch: July 10, 2026, 00:00 ET (UTC-4 in July / EDT).
var LAUNCH = new Date("2026-07-10T00:00:00-04:00").getTime();

var els = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  mins: document.getElementById("mins"),
  secs: document.getElementById("secs")
};

function pad(n) { return n < 10 ? "0" + n : "" + n; }

function tick() {
  var diff = LAUNCH - Date.now();

  if (diff <= 0) {
    els.days.textContent = "00";
    els.hours.textContent = "00";
    els.mins.textContent = "00";
    els.secs.textContent = "00";
    return;
  }

  var s = Math.floor(diff / 1000);
  var days = Math.floor(s / 86400);
  var hours = Math.floor((s % 86400) / 3600);
  var mins = Math.floor((s % 3600) / 60);
  var secs = s % 60;

  els.days.textContent = pad(days);
  els.hours.textContent = pad(hours);
  els.mins.textContent = pad(mins);
  els.secs.textContent = pad(secs);
}

tick();
setInterval(tick, 1000);
