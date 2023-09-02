export default function Header() {
	return (
		<div className="bg-white flex flex-row  p-3 space-x-0 justify-start rounded-xl w-full items-center">
			<a href="/#" rel="noreferrer">
				<div className="font-semibold text-lg flex space-x-2">
					<div className="w7">
						<img src="https://app.typetone.ai/img/ui/logo.svg" width={28} alt="logo" />
					</div>
					<div>Typetone.AI</div>
				</div>
			</a>
			<div className="flex space-x-1">
				<a
					className="rounded-lg flex items-center py-3 px-4 space-x-1 text-center -tracking-[0.016em] stroke-[2px] transition-all duration-200 ease-in-out text-neutral-900 hover:bg-primary-50 stroke-neutral-600"
					href="/#"
				>
					<div>
						<svg
							width="20"
							height="20"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.00003 27C5.99837 26.6056 6.07484 26.2147 6.22502 25.85C6.3752 25.4853 6.59611 25.1539 6.87502 24.875C7.15392 24.5961 7.4853 24.3752 7.85002 24.225C8.21475 24.0748 8.6056 23.9984 9.00003 24H26V4.00003H9.00003C8.6056 3.99837 8.21475 4.07484 7.85002 4.22502C7.4853 4.3752 7.15392 4.59611 6.87502 4.87502C6.59611 5.15392 6.3752 5.4853 6.22502 5.85002C6.07484 6.21475 5.99837 6.6056 6.00003 7.00003V27Z"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M6 27V28H24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</div>
					<div className="">Templates</div>
				</a>
				<a
					className="rounded-lg flex items-center py-3 px-4 space-x-1 text-center -tracking-[0.016em] stroke-[2px] transition-all duration-200 ease-in-out text-neutral-900 hover:bg-primary-50 stroke-neutral-600"
					href="/#"
				>
					<div>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 512 512"
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="none"
								strokeLinejoin="round"
								strokeWidth="32"
								d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
							></path>
							<path
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="32"
								d="M256 56v120a32 32 0 0032 32h120m-232 80h160m-160 80h160"
							></path>
						</svg>
					</div>
					<div className="">Documents</div>
				</a>
				<a
					className="rounded-lg flex items-center py-3 px-4 space-x-1 text-center -tracking-[0.016em] stroke-[2px] transition-all duration-200 ease-in-out text-neutral-900 hover:bg-primary-50 stroke-neutral-600"
					href="/#"
				>
					<div>
						<svg
							width="20"
							height="20"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 22H3.75C3.55109 22 3.36032 21.921 3.21967 21.7803C3.07902 21.6397 3 21.4489 3 21.25V13C3 10.6131 3.94821 8.32387 5.63604 6.63604C7.32387 4.94821 9.61305 4 12 4V4C14.3869 4 16.6761 4.94821 18.364 6.63604C20.0518 8.32387 21 10.6131 21 13V13C21 15.3869 20.0518 17.6761 18.364 19.364C16.6761 21.0518 14.3869 22 12 22V22Z"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M11.5125 22C12.133 23.7551 13.2824 25.2746 14.8025 26.3491C16.3226 27.4237 18.1384 28.0005 20 28H28.25C28.4489 28 28.6396 27.921 28.7803 27.7803C28.9209 27.6397 29 27.4489 29 27.25V19C29.0032 16.6964 28.1218 14.4796 26.5377 12.8071C24.9536 11.1346 22.7878 10.1343 20.4875 10.0125"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</div>
					<div className="">Chat</div>
				</a>
				<a
					className="rounded-lg flex items-center py-3 px-4 space-x-1 text-center -tracking-[0.016em] stroke-[2px] transition-all duration-200 ease-in-out text-neutral-900 hover:bg-primary-50 stroke-neutral-600"
					href="/#"
				>
					<div>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 24 24"
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M5 7H7V17H5V7ZM1 10H3V14H1V10ZM9 2H11V20H9V2ZM13 4H15V22H13V4ZM17 7H19V17H17V7ZM21 10H23V14H21V10Z"></path>
						</svg>
					</div>
					<div className="">Tone of Voice</div>
				</a>
			</div>
		</div>
	)
}
