import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function Certifications() {
    return (
        <Section id="certificaciones" title="Certificaciones">
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                    <h3 className="font-semibold">IBM – Variational Algorithm Design (2024)</h3>
                    <a className="mt-2 block underline hover:text-blue-700" href="https://www.credly.com/badges/c6061c9e-8077-4f90-9bd9-f94513d992c3/linked_in_profile" target="_blank" rel="noopener noreferrer">Ver credencial</a>
                </Card>
                <Card className="p-6">
                    <h3 className="font-semibold">IBM – Basics of Quantum Information (2024)</h3>
                    <a className="mt-2 block underline hover:text-blue-700" href="https://www.credly.com/badges/f4d0bc57-2184-47f2-a867-0e86287bcb29/linked_in_profile" target="_blank" rel="noopener noreferrer">Ver credencial</a>
                </Card>
                <Card className="p-6">
                    <h3 className="font-semibold">CISCO – Introduction to Cybersecurity (2023)</h3>
                    <a className="mt-2 block underline hover:text-blue-700" href="https://www.credly.com/badges/dcb15709-f0de-4725-969d-6630a658ca1c/linked_in_profile" target="_blank" rel="noopener noreferrer">Ver credencial</a>
                </Card>
            </div>
        </Section>
    );
}