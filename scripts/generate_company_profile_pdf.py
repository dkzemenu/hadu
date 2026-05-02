from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "documents" / "hadu-company-profile.pdf"

NAVY = colors.HexColor("#0B2545")
STEEL = colors.HexColor("#134074")
TEAL = colors.HexColor("#128C7E")
AMBER = colors.HexColor("#F59E0B")
CLOUD = colors.HexColor("#F4F7FA")
INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#5E6A7D")


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="CoverTitle",
        fontName="Helvetica-Bold",
        fontSize=30,
        leading=35,
        textColor=colors.white,
        alignment=TA_CENTER,
        spaceAfter=18,
    )
)
styles.add(
    ParagraphStyle(
        name="CoverSubtitle",
        fontName="Helvetica",
        fontSize=12,
        leading=18,
        textColor=colors.HexColor("#E7EEF7"),
        alignment=TA_CENTER,
    )
)
styles.add(
    ParagraphStyle(
        name="SectionTitle",
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=23,
        textColor=NAVY,
        spaceBefore=8,
        spaceAfter=10,
    )
)
styles.add(
    ParagraphStyle(
        name="SubTitle",
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=16,
        textColor=STEEL,
        spaceBefore=8,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        fontName="Helvetica",
        fontSize=9.5,
        leading=14,
        textColor=INK,
    )
)
styles.add(
    ParagraphStyle(
        name="Small",
        fontName="Helvetica",
        fontSize=8,
        leading=11,
        textColor=MUTED,
    )
)
styles.add(
    ParagraphStyle(
        name="Stat",
        fontName="Helvetica-Bold",
        fontSize=16,
        leading=20,
        textColor=NAVY,
        alignment=TA_CENTER,
    )
)
styles.add(
    ParagraphStyle(
        name="StatLabel",
        fontName="Helvetica",
        fontSize=8,
        leading=11,
        textColor=MUTED,
        alignment=TA_CENTER,
    )
)


company = {
    "name": "HADU Electro-Mechanical Engineering",
    "tagline": "Professional Electro-Mechanical Solutions in Ethiopia",
    "email": "mirishtam@gmail.com",
    "phone": "+251 930 033 828",
    "secondary_phone": "+251 911 791 270",
    "address": "BADMAS Building, Office No. 04, Bole Sub-city, Woreda 03, Addis Ababa, Ethiopia",
}

services = [
    ("Power Design & Installation Works", "Electrical power design, MV/LV distribution networks, overhead and underground lines, commissioning and handover."),
    ("Lifts & Escalators Installation", "Installation coordination and technical support for lift and escalator systems."),
    ("Solar System Supply & Installation", "Solar PV sizing, supply, installation, commissioning and maintenance planning."),
    ("Generator & Appliance Installation", "Procurement, installation and commissioning support for standby power and related equipment."),
    ("Telecom Fiber Line Works", "Telecom fiber line works and commercial power connection support for communication infrastructure."),
    ("Laboratory Equipment Supply", "Tender-focused supply of laboratory instruments, datasheets, installation coordination and after-sales documentation."),
    ("Other Electrical & Mechanical Works", "Street lighting, compound lighting, mechanical/electrical work packages, BOQ support and handover documentation."),
]

projects = [
    ("UEAP B_2/01 Lot_6 MV/LV Distribution Network", "UEAP", "North Shoa Oromia and South Wollo", "122 km medium-voltage line and 52+ km low-voltage distribution works."),
    ("UEAP B_2/03 Lot_74 Tekeze-AbiAdi 33 kV Line", "UEAP", "Tigray Region", "96 km concrete pole 33 kV double line, net stations and village MV upgrades."),
    ("UEAP Networks and D.B. Blanket Factory LV Lines", "UEAP", "Ethiopia", "MV/LV distribution works and LV underground line installation at D.B. Blanket Factory."),
    ("Safaricom Ethiopia Commercial Power Connections", "Safaricom Ethiopia", "Amhara Region", "Commercial power line connection services under SOW Ref. No. 002."),
    ("Bonga Town Street Light Works", "Completion certificate", "Bonga Town", "Civil and electrical works for street lighting. Contract amount: 10.23 million ETB."),
    ("KEC Mojo-Adama Compound Electrification", "KEC International", "Mojo-Adama area", "33 kV underground cable, 220 V street lighting, 0.12 km UG cable and 104 steel poles."),
]

management = [
    ("General Manager", "Mr. Mehari Admassu", "BSc Electrical Engineering"),
    ("Projects Head", "Addisu Dagne", "Civil Engineering background"),
    ("Finance Head", "Senait Tadele", "BA Accounting"),
    ("Human Resource & Business Administration", "Belachew Admassu", "MA Business Administration"),
    ("HSE Manager", "Eden Berhane", "MSc Public Health, Electrical Safety and Risk Assessment Certified"),
]

equipment = [
    "Truck-mounted crane, 6 ton",
    "Pickups and Isuzu trucks",
    "Welding machines and arc welding machines",
    "Crane, chain blocks and wire strainers",
    "Asphalt cutters, jack hammers, concrete mixers and vibrators",
    "Tool sets, drilling machines, scaffolding, ladders and safety kits",
    "7KW generators",
]

hse_people = [
    ("Eden Berhane", "HSE Manager", "MSc Public Health; Electrical Safety; Risk Assessment"),
    ("Tsion Kindalem", "HSE Team Leader", "BSc Electrical Engineering; Electrical Safety; Risk Assessment"),
    ("Mulat Bekele", "Site Engineer", "BSc Electrical Engineering; Electrical Safety; Risk Assessment"),
    ("Asalfew Asfaw", "Site Engineer", "BSc Electrical Engineering; Electrical Safety; Risk Assessment"),
    ("Besufekad Mamo", "Supervisor", "Diploma Electricity; Electrical Safety; Risk Assessment"),
    ("Zerihun Melese", "Supervisor", "Diploma Electricity; Electrical Safety; Risk Assessment"),
    ("Haile W/Aregay", "Supervisor", "Diploma Electricity & Management; Electrical Safety; Risk Assessment"),
]


def p(text, style="Body"):
    return Paragraph(text, styles[style])


def bullet_list(items):
    rows = []
    for item in items:
        rows.append([Paragraph("■", ParagraphStyle("BulletIcon", fontSize=7, textColor=TEAL)), p(item)])
    table = Table(rows, colWidths=[0.35 * cm, 15.7 * cm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return table


def section(title):
    return [Spacer(1, 0.25 * cm), p(title, "SectionTitle")]


def card(title, body):
    data = [[p(title, "SubTitle")], [p(body)]]
    table = Table(data, colWidths=[7.65 * cm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.4, colors.HexColor("#D8E0EA")),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 9),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
            ]
        )
    )
    return table


def draw_header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, A4[1] - 1.2 * cm, A4[0], 1.2 * cm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(1.7 * cm, A4[1] - 0.75 * cm, company["name"])
    canvas.setFillColor(AMBER)
    canvas.circle(1.15 * cm, A4[1] - 0.62 * cm, 0.18 * cm, fill=1, stroke=0)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8)
    canvas.drawString(1.7 * cm, 0.75 * cm, f"{company['phone']} / {company['secondary_phone']}  |  {company['email']}")
    canvas.drawRightString(A4[0] - 1.7 * cm, 0.75 * cm, f"Page {doc.page}")
    canvas.restoreState()


def draw_cover(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setFillColor(STEEL)
    canvas.rect(0, 0, A4[0], 8.2 * cm, fill=1, stroke=0)
    canvas.setFillColor(TEAL)
    canvas.rect(0, 0, 2.4 * cm, A4[1], fill=1, stroke=0)
    canvas.setFillColor(AMBER)
    canvas.circle(A4[0] - 3.2 * cm, A4[1] - 4.5 * cm, 1.1 * cm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 28)
    canvas.drawCentredString(A4[0] / 2, A4[1] - 7 * cm, "HADU")
    canvas.setFont("Helvetica-Bold", 17)
    canvas.drawCentredString(A4[0] / 2, A4[1] - 8.05 * cm, "Electro-Mechanical Engineering")
    canvas.setFont("Helvetica", 11)
    canvas.drawCentredString(A4[0] / 2, A4[1] - 9 * cm, "Professional Electro-Mechanical Solutions in Ethiopia")
    canvas.setStrokeColor(colors.white)
    canvas.setLineWidth(0.8)
    canvas.line(5 * cm, A4[1] - 9.8 * cm, A4[0] - 5 * cm, A4[1] - 9.8 * cm)
    canvas.setFont("Helvetica-Bold", 11)
    canvas.drawCentredString(A4[0] / 2, 7.2 * cm, "Company Profile")
    canvas.setFont("Helvetica", 9)
    canvas.drawCentredString(A4[0] / 2, 6.5 * cm, "Power design | MV/LV distribution | Solar | Generators | Telecom power | HSE")
    canvas.drawCentredString(A4[0] / 2, 4.6 * cm, company["address"])
    canvas.drawCentredString(A4[0] / 2, 4.0 * cm, f"{company['phone']} / {company['secondary_phone']}  |  {company['email']}")
    canvas.restoreState()


def stat_table():
    data = [
        [p("19+", "Stat"), p("$15M+", "Stat"), p("Nationwide", "Stat")],
        [p("Professional and technical staff", "StatLabel"), p("Largest listed contract value", "StatLabel"), p("Project delivery coverage", "StatLabel")],
    ]
    table = Table(data, colWidths=[5.35 * cm, 5.35 * cm, 5.35 * cm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), CLOUD),
                ("BOX", (0, 0), (-1, -1), 0.4, colors.HexColor("#D8E0EA")),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#D8E0EA")),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    return table


def data_table(headers, rows, widths):
    data = [[p(h, "SubTitle") for h in headers]]
    data.extend([[p(str(cell)) for cell in row] for row in rows])
    table = Table(data, colWidths=widths, repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), CLOUD),
                ("TEXTCOLOR", (0, 0), (-1, 0), NAVY),
                ("BOX", (0, 0), (-1, -1), 0.4, colors.HexColor("#CBD5E1")),
                ("INNERGRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#E2E8F0")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return table


def build():
    doc = BaseDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=1.7 * cm,
        rightMargin=1.7 * cm,
        topMargin=2.0 * cm,
        bottomMargin=1.5 * cm,
        title="HADU Electro-Mechanical Engineering Company Profile",
        author="HADU Electro-Mechanical Engineering",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates(
        [
            PageTemplate(id="cover", frames=[frame], onPage=draw_cover),
            PageTemplate(id="body", frames=[frame], onPage=draw_header_footer),
        ]
    )

    story = [NextPageTemplate("body"), PageBreak()]

    story += section("Company Snapshot")
    story += [
        p(
            "HADU Electro-Mechanical Engineering was established in Ethiopia to provide professional support in the electro-mechanical sector. The company combines electrical construction experience with designers, engineers, administrators, technicians, supervisors and site personnel.",
        ),
        Spacer(1, 0.35 * cm),
        stat_table(),
    ]

    story += section("Mission, Vision & Objective")
    story.append(
        Table(
            [
                [
                    card(
                        "Mission",
                        "Deliver quality electro-mechanical engineering services on time and at competitive cost through safe technical competence, professional integrity and customer-focused quality assurance.",
                    ),
                    card(
                        "Vision",
                        "Become a leading provider of electro-mechanical solutions and services by building long-term partnerships and delivering smarter engineering services across Ethiopia and the region.",
                    ),
                ]
            ],
            colWidths=[8.05 * cm, 8.05 * cm],
        )
    )
    story.append(Spacer(1, 0.25 * cm))
    story.append(
        card(
            "Main Objective",
            "Meet customer requirements through quality equipment, materials, services, erection, installation, management systems, employee training, regular review and continual improvement.",
        )
    )

    story += section("Core Services")
    service_rows = [(title, desc) for title, desc in services]
    story.append(data_table(["Service", "Capability"], service_rows, [5.3 * cm, 10.8 * cm]))

    story += [PageBreak()]
    story += section("Relevant Project Experience")
    story.append(
        data_table(
            ["Project", "Client", "Location", "Scope"],
            projects,
            [4.25 * cm, 3.15 * cm, 3.0 * cm, 5.7 * cm],
        )
    )

    story += section("Management & Staff Resources")
    story.append(
        data_table(
            ["Role", "Name", "Qualification / Profile"],
            management,
            [4.6 * cm, 4.4 * cm, 7.1 * cm],
        )
    )
    story.append(Spacer(1, 0.25 * cm))
    story.append(
        p(
            "The company profile identifies 19+ staff members across management, engineering, surveying, tower erection, installation, foreman, crane operation and technical roles. Additional technical staff and daily labor can be hired according to project volume.",
        )
    )

    story += [PageBreak()]
    story += section("HSE / OSH Management")
    story.append(
        p(
            "HADU's OSH management system is built around policy, organizing, training, documentation, communication, planning, implementation, evaluation, audit, preventive action, corrective action and continual improvement.",
        )
    )
    story.append(Spacer(1, 0.25 * cm))
    story.append(
        data_table(
            ["Name", "Responsibility", "Qualification"],
            hse_people,
            [4.0 * cm, 4.0 * cm, 8.1 * cm],
        )
    )

    story += section("Equipment & Machinery")
    story.append(bullet_list(equipment))

    story += section("Work Methodology")
    methodology = [
        "Site preparation study, including feeder lines, MV routes, net station locations and safe positioning.",
        "Surveying and preparation of single-line diagrams for pole pit locations, underground routes and mini-substation locations.",
        "Transportation and supply coordination for poles, construction tools and accessories.",
        "Pole pit preparation, pole erection, trenching and PVC pipe laying with supervision and precision.",
        "Accessories fitting, stringing, cable jointing, grounding, compact substation laying and LV pillar installation.",
        "Commissioning, energizing and site handover with attention to technical checks and warranty obligations.",
    ]
    story.append(bullet_list(methodology))

    story += [PageBreak()]
    story += section("Company Values")
    story.append(
        bullet_list(
            [
                "Quality, cost and efficiency in electrical materials and project delivery.",
                "Professional and technical excellence.",
                "Long-term client relationships.",
                "Human resource development and knowledge building.",
                "Transparency, professionalism, honesty, integrity and ethics.",
                "Process discipline, predictability and continuous improvement.",
            ]
        )
    )

    story += section("Contact")
    contact_rows = [
        ("Legal Name", company["name"]),
        ("Office", company["address"]),
        ("Telephone", f"{company['phone']} / {company['secondary_phone']}"),
        ("Email", company["email"]),
    ]
    story.append(data_table(["Item", "Detail"], contact_rows, [4.0 * cm, 12.1 * cm]))

    story.append(Spacer(1, 0.5 * cm))
    story.append(
        KeepTogether(
            [
                p("Document Note", "SubTitle"),
                p(
                    "This modern profile is based on the company data supplied in HADU's existing profile. Replace or supplement with signed registration certificates, business competency documents, testimonials and reference letters where formal tender submission requires original attachments.",
                    "Small",
                ),
            ]
        )
    )

    doc.build(story)


if __name__ == "__main__":
    build()
    print(f"Generated {OUT}")
