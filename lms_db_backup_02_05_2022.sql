--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Ubuntu 14.2-1ubuntu1)
-- Dumped by pg_dump version 14.2 (Ubuntu 14.2-1ubuntu1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(30) NOT NULL,
    price real NOT NULL,
    author character varying(30) NOT NULL,
    description text NOT NULL,
    date date,
    subject character varying(30),
    isbn_no text,
    copy integer
);


ALTER TABLE public.books OWNER TO postgres;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.books_id_seq OWNER TO postgres;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment (
    id integer NOT NULL,
    username character varying(40) NOT NULL,
    email character varying(30) NOT NULL,
    book_name character varying(30) NOT NULL,
    pay_type character varying(30) NOT NULL,
    date date
);


ALTER TABLE public.payment OWNER TO postgres;

--
-- Name: payment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_id_seq OWNER TO postgres;

--
-- Name: payment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_id_seq OWNED BY public.payment.id;


--
-- Name: records; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.records (
    id integer NOT NULL,
    username character varying(40) NOT NULL,
    email character varying(30) NOT NULL,
    book_name character varying(30) NOT NULL,
    date date,
    total_book integer
);


ALTER TABLE public.records OWNER TO postgres;

--
-- Name: records_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.records_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.records_id_seq OWNER TO postgres;

--
-- Name: records_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.records_id_seq OWNED BY public.records.id;


--
-- Name: user_rule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_rule (
    id integer NOT NULL,
    username character varying(40) NOT NULL,
    password text NOT NULL,
    email character varying(30) NOT NULL,
    occupation character varying(40) NOT NULL,
    date date
);


ALTER TABLE public.user_rule OWNER TO postgres;

--
-- Name: user_rule_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_rule_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_rule_id_seq OWNER TO postgres;

--
-- Name: user_rule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_rule_id_seq OWNED BY public.user_rule.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    username character varying(40) NOT NULL,
    password text NOT NULL,
    email character varying(30) NOT NULL,
    phone_no integer NOT NULL,
    gender character varying(15) NOT NULL,
    occupation character varying(40) NOT NULL,
    date date
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Name: payment id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment ALTER COLUMN id SET DEFAULT nextval('public.payment_id_seq'::regclass);


--
-- Name: records id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records ALTER COLUMN id SET DEFAULT nextval('public.records_id_seq'::regclass);


--
-- Name: user_rule id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rule ALTER COLUMN id SET DEFAULT nextval('public.user_rule_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books (id, title, price, author, description, date, subject, isbn_no, copy) FROM stdin;
22	chem	567	Rk	Wow	2022-04-30	History	77ee3171-e68b-4	0
32	chem	567	Rks	Wow	2022-04-30	History	741aea1a-e2ff-4	0
23	chem	567	Rks	Wow	2022-04-30	History	ba08597d-d19d-4	2
24	chem	567	Rks	Wow	2022-04-30	History	a37ef1b9-dba8-4	2
25	chem	567	Rks	Wow	2022-04-30	History	e77c17a5-00b2-4	2
26	chem	567	Rks	Wow	2022-04-30	History	440e0ae2-3b5d-4	2
27	chem	567	Rks	Wow	2022-04-30	History	3872abd9-d1dd-4	2
29	chem	567	Rks	Wow	2022-04-30	History	b6228636-254d-4	2
30	chem	567	Rks	Wow	2022-04-30	History	33bb4868-3717-4	2
31	chem	567	Rks	Wow	2022-04-30	History	d86b9bca-b1d4-4	2
33	chemistry	567	Rkwes	Wow	2022-04-30	History	38ccc05c-fc18-4	0
34	Maths	567	Rs Agarwal	Wow	2022-04-30	History	d6a81401-ed5a-4	0
20	Maths	567	Rs Agarwal	Wow	2022-04-30	History&Civis	0fbdc28d-fbfd-4	6
19	Maths	567	Rs Agarwal	Wow	2022-04-30	History&Civis	7b1f5467-ee1d-4	6
1	Maths	599	Rs Agarwal	Read Me	2022-12-12	Mathematics	1234-wqe-weq123	6
28	chem	567	Rs Agarwal;	Wow	2022-04-30	History	d27f2691-4290-4	2
35	How Number Works	567	Dan Richard	Wow	2022-04-30	computer	8620756e-f3ff-4	0
\.


--
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment (id, username, email, book_name, pay_type, date) FROM stdin;
4	Ahsan	ahsan@gmail.com	Merchent of venice	Debit card	2022-04-29
5	Ahsan	ahsan@gmail.com	Merchent of venice	Debit card	2022-04-29
6	Ahsan	ahsan@gmail.com	Merchent of venice	Debit card	2022-04-29
7	Ahsan	ahsan@gmail.com	Merchent of venice	Debit card	2022-04-29
3	Alio	ahsan@gmail.com	History	Credit Card	2022-04-29
10	Ahsan	ahsan@gmail.com	Merchent of venice	Debit card	2022-04-30
\.


--
-- Data for Name: records; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.records (id, username, email, book_name, date, total_book) FROM stdin;
9	Ahsan	Ahsan@gmail	kol	2022-04-12	11
15	AHsan	Ahsan@gmail.com	History	2022-04-29	45
25	AHsan	Ahsan@gmail.com	evs	2022-04-29	45
26	AHsan	Ahsan@gmail.com	evs	2022-04-29	45
27	AHsan	Ahsan@gmail.com	evs	2022-04-29	45
17	ALIOOOOO	Ahsan@gmail.com	History	2022-04-29	101
18	ALIOOOOO	Ahsan@gmail.com	History	2022-04-29	101
19	ALIOOOOO	Ahsan@gmail.com	evs	2022-04-29	101
34	Ahsan	Ahsanalio234@gmail.com	Chemistry	2022-04-30	10
20	ALIOOOOO	Ahsan@gmail.com	evs	2022-04-29	101
35	Ahsan	Ahsanalio234@gmail.com	Chemistry	2022-04-30	11
36	Ahsan	Ahsanalio234@gmail.com	Chemistry	2022-04-30	12
\.


--
-- Data for Name: user_rule; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_rule (id, username, password, email, occupation, date) FROM stdin;
1	AhsanAli	password	ahsan@gmail.com	librarian	2022-04-28
2	AhsanAli0	pass	ahsanali@gmail.com	librarian	2022-04-28
3	Ahs	passport	alio@gmail.com	student	2022-04-28
4	Ahsana	passports	alio234@gmail.com	student	2022-04-29
5	kristy_honey	snow	Alio1234@gmail.com	librarian	2022-04-29
6	kriswty_honey	sdsanow	Aliwewo@gmail.com	librarian	2022-04-29
7	krisaswty_honey	sdasdsanow	Aliweasdwo@gmail.com	librarian	2022-04-29
8	krihyrsaswty_honey	sdangcsdsanow	Aliweasdnuyfwo@gmail.com	librarian	2022-04-29
9	Ahsan_Alio	Alio	AhsanAli1@gmail.com	student	2022-04-29
10	A_A	A_A	A@gmail.com	librarian	2022-04-29
11	A_AL	A_AL	AL@gmail.com	librarian	2022-04-29
12	AA_AL	AA_AL	AALL@gmail.com	librarian	2022-04-30
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, username, password, email, phone_no, gender, occupation, date) FROM stdin;
6	Ahsan	Ahsana	passports	alio234@gmail.com	1234567890	Male	student	2022-04-29
14	Ahsan	kriswty_honey	sdsanow	Aliwewo@gmail.com	1234567890	Male	librarian	2022-04-29
15	Ahsan	krisaswty_honey	sdasdsanow	Aliweasdwo@gmail.com	1234567890	Male	librarian	2022-04-29
17	Ahsan	krihyrsaswty_honey	sdangcsdsanow	Aliweasdnuyfwo@gmail.com	1234567890	Male	librarian	2022-04-29
28	Ahsan	krwqeAdihyrsaswty_honey	sddsadSAangcsdsanow	AliweASDsadasdnuyfwo@gmail.com	1234567890	Male	librarian	2022-04-29
29	Ahsan	kry	sdow	Ali@gmail.com	1234567890	Male	librarian	2022-04-29
32	Ahsan	krysad	sdowsad	Alasi@gmail.com	1234567890	Male	librarian	2022-04-29
40	A	A_A	A_A	A@gmail.com	123456789	Male	librarian	2022-04-29
46	AL	A_AL	A_AL	AL@gmail.com	123456789	Male	librarian	2022-04-29
36	Ahsan	Ahsan_Alio	Snows	AhsanAli1@gmail.com	123456789	Male	student	2022-04-29
4	Ahsan	Ahs	Snow	alio@gmail.com	1234567890	Male	student	2022-04-28
48	AL	AA_AL	AA_AL	AALL@gmail.com	123456789	Male	librarian	2022-04-30
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.books_id_seq', 35, true);


--
-- Name: payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_id_seq', 10, true);


--
-- Name: records_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.records_id_seq', 36, true);


--
-- Name: user_rule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_rule_id_seq', 12, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 48, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: payment payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (id);


--
-- Name: records records_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_pkey PRIMARY KEY (id);


--
-- Name: user_rule user_rule_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rule
    ADD CONSTRAINT user_rule_email_key UNIQUE (email);


--
-- Name: user_rule user_rule_password_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rule
    ADD CONSTRAINT user_rule_password_key UNIQUE (password);


--
-- Name: user_rule user_rule_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rule
    ADD CONSTRAINT user_rule_pkey PRIMARY KEY (id);


--
-- Name: user_rule user_rule_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rule
    ADD CONSTRAINT user_rule_username_key UNIQUE (username);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_password_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_password_key UNIQUE (password);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

