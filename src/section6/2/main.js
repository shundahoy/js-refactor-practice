function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}
