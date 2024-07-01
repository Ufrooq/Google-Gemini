import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const MainBox = () => {
  const { show, showResult, quick_links, showEditBox, setshowEditBox } =
    useContext(GlobalContext);

  const handleUpdate = () => {
    setshowEditBox(true);
  };
  return (
    <div className="p-5 w-full max-h-[90vh] relative overflow-y-scroll">
      <div className="w-[60%] h-full mx-auto">
        {showResult ? (
          <>
            <h1 className="font-semibold text-6xl pt-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                Hello, Umar!
              </span>
            </h1>
            <h1 className="mt-4 font-semibold text-6xl text-gray-300">
              How can I help you today ?
            </h1>
            <div className="w-full gap-3 flex mt-20">
              {quick_links.map((link, key) => (
                <div
                  key={key}
                  className="w-full flex h-[200px] flex-col justify-between flex-grow-1 cursor-pointer rounded-[10px] p-5 bg-slate-100 hover:bg-slate-200 transition shadow-sm"
                >
                  <p className="text-[0.9rem]">{link[1]}</p>
                  <button className="ms-auto">
                    <i class={`fa-solid fa-${link[0]}`}></i>
                  </button>
                </div>
              ))}
            </div>
            {show && (
              <div className="mt-8 mb-32 flex flex-col rounded-[10px] p-4 justify-between gap-10 bg-gray-100">
                <p className="text-[0.9rem] leading-6">
                  Humans review some saved chats to improve Google AI. To stop
                  this for future chats, turn off Gemini Apps Activity. If this
                  setting is on, don't enter info you wouldn’t want reviewed or
                  used. How it works
                </p>
                <div className="flex items-center gap-2 ms-auto">
                  <button className="px-4 py-2 rounded-[20px] text-indigo-500 hover:bg-blue-100 transition">
                    Manage Activity
                  </button>
                  <button
                    onClick={() => setshow(false)}
                    className="px-4 py-2 rounded-[20px] text-indigo-500 hover:bg-blue-100 transition"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full mt-5">
            <div
              className={`flex items-${showEditBox ? "start" : "center"} gap-4`}
            >
              <i class="fa-regular fa-circle-user text-3xl mt-1"></i>
              {!showEditBox ? (
                <p className="leading-7 text-sm">What is DSA?</p>
              ) : (
                <div className="w-full flex flex-col gap-4">
                  <input
                    className="w-full border-2 border-blue-600 outline-blue-600 bg-blue-50 text-sm px-4 py-4 rounded-[6px]"
                    type="text"
                    name=""
                    id=""
                    value={"What is DSA?"}
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setshowEditBox(!showEditBox)}
                      className="px-4 py-2 rounded-[20px] text-blue-700 hover:bg-slate-100 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setshowEditBox(false)}
                      className="px-4 py-2 rounded-[20px] text-white bg-blue-500 hover:opacity-90 transition"
                    >
                      Update
                    </button>
                  </div>
                </div>
              )}
              <button
                onClick={() => setshowEditBox(!showEditBox)}
                className="w-9 h-8 mt-1 rounded-[50%] flex justify-center items-center bg-slate-200"
              >
                <i class="fa-regular fa-pen-to-square text-sm"></i>
              </button>
            </div>
            <div className="w-full items-start gap-4 flex mt-10 mb-32">
              <img
                className="scale-125"
                src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                alt=""
              />
              <div>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  dolores odit sunt est debitis voluptas, placeat quo, nam
                  eligendi dolorem iste magnam error omnis, autem ipsa. Unde
                  quibusdam magnam nisi quis fugiat explicabo illum veritatis
                  magni officiis dolore, eveniet quia eaque? Eveniet aliquid
                  assumenda reiciendis fugiat qui maxime, dolorum cupiditate
                  dignissimos recusandae accusamus rem maiores veritatis
                  obcaecati iste amet voluptatibus quo. Tenetur placeat quam,
                  quidem saepe atque eaque eligendi accusamus id asperiores
                  reiciendis doloribus ad repellendus! Voluptatum, nostrum
                  molestias unde molestiae excepturi optio dolorum, similique
                  eius cupiditate aliquid voluptas expedita suscipit cum veniam
                  vel temporibus laboriosam nesciunt? Non ut veniam esse facere
                  animi, architecto aspernatur repellat, asperiores eos nemo
                  consequuntur ab quos aliquam alias quo illo placeat
                  laboriosam? Aliquam explicabo repellat repellendus ut error
                  mollitia molestiae sed amet labore unde. Corrupti
                  consequuntur, accusantium vero obcaecati iusto quidem laborum
                  esse eius perferendis quasi exercitationem fugiat minus sunt
                  quod optio natus asperiores nesciunt nisi! Voluptate
                  exercitationem quasi rem. Magni, maiores incidunt? Quae
                  inventore dolorem quos asperiores nulla, accusamus fugiat
                  tempore vero? Laboriosam magnam minus aliquid neque, modi illo
                  corrupti, sequi quidem facilis nam adipisci ab accusantium
                  excepturi quis aperiam molestias quos ea temporibus atque quam
                  fugiat at ipsam. Non corporis amet sit tempora eaque
                  consectetur accusamus accusantium eius libero, odit alias!
                  Iure, unde dignissimos. Consequuntur suscipit vitae doloremque
                  aliquid dicta. Et consectetur explicabo voluptatem voluptate
                  vero est enim in. Ratione suscipit veritatis vero provident
                  reprehenderit saepe. Dolore, voluptatibus. Corporis iure
                  eligendi dicta veritatis magnam? Libero, quis nihil dolorem
                  iure blanditiis non enim doloremque? Voluptate veniam
                  assumenda cumque consectetur quo quod eos quisquam accusamus
                  porro officiis id totam magnam architecto similique laborum
                  eius amet, quae eveniet tempora corporis doloremque sed?
                  Incidunt, corrupti unde. Officia magnam odio dolore, ut
                  repellendus voluptates quasi nostrum libero impedit recusandae
                  corporis iure quisquam neque consectetur beatae assumenda
                  nulla illo natus minima! Maxime tempora similique, labore
                  eaque dolorum, tempore accusamus impedit neque aliquid dolor
                  asperiores nulla, ea omnis odit repellendus unde! Aperiam
                  consectetur labore veniam architecto cumque rem eum sapiente
                  distinctio expedita incidunt, nihil ullam recusandae molestiae
                  dignissimos amet voluptatem temporibus officia beatae iusto.
                  Beatae, saepe accusantium? Doloremque sunt, repellat officiis
                  autem, saepe recusandae debitis, hic dicta mollitia voluptatem
                  excepturi perferendis quis accusamus. Itaque obcaecati
                  consequatur asperiores, alias nostrum cum ex facilis
                  perspiciatis neque aperiam, accusamus eos temporibus. Nisi
                  qui, dignissimos illum pariatur quis suscipit nobis magni!
                  Dicta voluptatum odit facere placeat ipsam minima iure
                  consequuntur molestias labore. Quo?
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBox;
