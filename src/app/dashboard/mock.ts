const sampleObject = {
  counsellor: "John Doe",
  student: "Mary Jane",
  priority: "High/Ongoing",
  date: "April 1, 2022 10:00 AM",
  period: "Front Office 2/Evening",
};

export const sampleData = Array.from({ length: 6 }, () => ({ ...sampleObject }));
