import { HostContext } from "../App";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

  export default function Section1pc() {
    const host = useContext(HostContext);
    const polshu = host + "/imagenesEventop/polshu.png"
    const polo = host + "/imagenesEventop/polo.jpeg"
    const posts = [
    {
      id: 1,
      title: 'VENGAN A LA FIESTA CANINA',
      href: '#',
      description:
        'Todo aquel que lo desee podra acceder a la fiesta canina, Fiesta que se realizara en los bosques de palermo, el viernes 29 de diciembre a las 8 pm. (chicas lindas hay)',
      date: 'Mar 17, 2023',
      datetime: '2020-03-16',
      category: { title: 'Fiesta Canina', href: "#" },
      author: {
        name: 'Tomas Antonio Polonsky',
        role: 'Founder / CTO',
        href: '/verPerfil/1',
        imageUrl:
          polo,
      },
    },
    {
        id: 2,
        title: 'Muy Buena la app',
        href: '#',
        description:
          'Me parecio demasiado anal esta aplicacion porfavor chicos sigan asi',
        date: 'sep 17, 2023',
        datetime: '2020-03-16',
        category: { title: 'Buenarda', href: "#" },
        author: {
          name: 'Polshu',
          role: 'Profesor / DAI',
          href: '/verPerfil/2',
          imageUrl:
            polshu,
        },
      },
      {
        id: 1,
        title: 'Amo Eventop',
        href: '#',
        description:
          'Amo Eventop chicos tipo osea re cool super fashion la paso super es incredivel',
        date: 'Jun 27, 2023',
        datetime: '2020-03-16',
        category: { title: 'Eventop Love', href: "#" },
        author: {
          name: 'HoneyDicker666',
          role: 'Founder / CTO',
          href: '/verPerfil/3',
          imageUrl:
            "https://lh6.ggpht.com/-XBjC6tgqJs8/VAT7o5e2XjI/AAAAAAAAXdI/5nX7kQpzpfE/137590226578_thumb%25255B1%25255D.jpg?imgmax=800  ",
        },
      },
      
  ]

    return (
      <div className=" py-24  ">
        <div className="mx-auto max-w-8xl px-6 lg:px-8 bg-gray-900 p-2 rounded-lg">
          
          <div className="grid gap-x-4 pt-5 mx-0max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between hover:bg-gray-800 rounded-lg ">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-neutral-300">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-pink-500 px-3 py-1.5 font-medium text-neutral-200 hover:bg-pink-300"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-200 group-hover:text-neutral-300">
                    
                      <span className="absolute inset-0" />
                      {post.title}
                  
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-200">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <Link key={post.id} to={`/VerPerfil/${post.id}`}>
                  <img src={post.author.imageUrl} alt="" className="h-12 w-12 rounded-full bg-gray-50" />
                  </Link>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-neutral-200">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-neutral-200">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }