document.addEventListener("DOMContentLoaded", function() {
	const s = new URLSearchParams(location.search).get("score") || 0;
	const s2 = new URLSearchParams(location.search).get("score2") || 0;
	const s3 = new URLSearchParams(location.search).get("score3") || 0;
	const s4 = new URLSearchParams(location.search).get("score4") || 0;
	const s5 = new URLSearchParams(location.search).get("score5") || 0;
	const s6 = new URLSearchParams(location.search).get("score6") || 0;
	const s7 = new URLSearchParams(location.search).get("score7") || 0;
	const s8 = new URLSearchParams(location.search).get("score8") || 0;
	const s9 = new URLSearchParams(location.search).get("score9") || 0;
	const s10 = new URLSearchParams(location.search).get("score10") || 0;

	const totalScore = parseInt(s) + parseInt(s2) + parseInt(s3) + parseInt(s4) + parseInt(s5) + parseInt(s6) + parseInt(s7) + parseInt(s8) + parseInt(s9) + parseInt(s10);

	const res = {
		0: "an accident on a highway.",
		1: "truely retarded.",
		2: "addicted to drugs.",
		3: "a gang member.",
		4: "failing school.",
		5: "pure dumb.",
		6: "mostly normal.",
		7: "an average straight B student.",
		8: "somewhat smart.",
		9: "getting constant 3.5+ GPAs on all report cards.",
		10: "smarter than Whoopdeedoo56 doing cypto."
	};

	document.getElementById("result").innerHTML = res[totalScore];
});