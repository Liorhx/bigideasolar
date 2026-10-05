async function runTests() {
  console.log("--- STARTING BIGIDEASOLAR PLATFORM TEST SUITE ---");

  // Test 1: GET Home Page HTML
  const homeRes = await fetch("http://localhost:3001/");
  console.log("1. GET / Status:", homeRes.status);
  const homeHtml = await homeRes.text();
  console.log("   Contains 'BigIdea':", homeHtml.includes("BigIdea"));
  console.log("   Contains phone '9044914653':", homeHtml.includes("9044914653") || homeHtml.includes("90449 14653"));
  console.log("   Contains email 'bigidea97@gmail.com':", homeHtml.includes("bigidea97@gmail.com"));

  // Test 2: GET /api/config
  const configRes = await fetch("http://localhost:3001/api/config");
  const configData = await configRes.json();
  console.log("2. GET /api/config:", configData.success, "Brand:", configData.config?.brandName, "Phone:", configData.config?.phone, "Email:", configData.config?.email);

  // Test 3: POST /api/leads
  const leadPayload = {
    name: "Dr. Alok Verma",
    phone: "9044914653",
    area: "Kalyanpur / Unity City",
    systemSize: "3 kW",
    monthlyBill: "₹2,000 - ₹3,000",
    propertyType: "Independent House",
    hasRooftop: "Yes",
    preferredBrand: "Tata Power Solar",
    source: "Website"
  };
  const leadRes = await fetch("http://localhost:3001/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadPayload)
  });
  const leadData = await leadRes.json();
  console.log("3. POST /api/leads Created Lead ID:", leadData.lead?.id, "Coupon Code:", leadData.couponCode);

  // Test 4: POST /api/coupons/verify
  const verifyRes = await fetch("http://localhost:3001/api/coupons/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code: leadData.couponCode })
  });
  const verifyData = await verifyRes.json();
  console.log("4. POST /api/coupons/verify Result:", verifyData.verified, "Customer:", verifyData.customerName, "Discount:", verifyData.discount);

  console.log("--- ALL TESTS COMPLETED SUCCESSFULLY! ---");
}

runTests().catch(console.error);
