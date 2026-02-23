import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
	title: "Project Deep Question",
	description:
		"AI 시대, 답보다 중요한 건 ‘무엇을 물을지’입니다. 삶을 지탱할 질문을 세우는 4번의 훈련.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
				/>
			</head>
			<body className="antialiased">{children}</body>
		</html>
	);
}
