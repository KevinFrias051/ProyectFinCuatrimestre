"use client";
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export function Buscador() {
 const [search, setSearch] = useState<string>('');

 const handleSearchChange = (event) => {
   setSearch(event.target.value);
 };

 return (
   <TextField value={search} onChange={handleSearchChange} label="Buscar" />
 );
}