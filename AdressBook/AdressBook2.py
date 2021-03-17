import pickle

book = {"Никита": "89206710497", "Женя": "89206712571"}


class AdressBook:
    # 1
    def book(self):
        for key, value in book.items():
            print("{0}: {1}".format(key, value))

    # 2
    def addBook(self):
        name = input("Введите имя: ")
        number = input("Введите номер: ")

        book[name] = number
        for key, value in book.items():
            print("{0}: {1}".format(key, value))

    # 3
    def changeBook(self):
        name = input("Введите старое имя: ")
        new_name = input("Введите новое имя: ")
        new_number = input("Введите новый номер: ")

        book[new_name] = book[name]
        del book[name]

        book[new_name] = new_number

        for key, value in book.items():
            print("{0}: {1}".format(key, value))

    # 4
    def delBook(self):
        delName = input("Введите имя: ")
        del book[delName]
        # print(book)
        for key, value in book.items():
            print("{0}: {1}".format(key, value))

    # 5
    def searchBook(self):
        search_number = input("Введите имя: ")
        for name, number in book.items():
            if name == search_number:
                print(number)

    # 6
    def saveBook(self):
        AdressBookFile = "AdressBook.data"

        ABFile = book

        f = open(AdressBookFile, "wb")
        pickle.dump(ABFile, f)
        f.close

        del ABFile

        f = open(AdressBookFile, "rb")
        storedlist = pickle.load(f)

        for key, value in book.items():
            print("{0}: {1}".format(key, value))

    # 7
    def recording(self):
        poem = input("Введите текст для записи: ")

        f = open("poem.txt", "w")
        f.write(poem)
        f.close()

        f = open("poem.txt")

        while True:
            line = f.readline()
            if len(line) == 0:
                break
            print(line, end="")

        f.close


ab = AdressBook()


def interaction():
    print(
        "1. Открыть контакты",
        "\n2. Добавить контакт",
        "\n3. Изменить контакты",
        "\n4. Удалить контакт",
        "\n5. Найти контакт",
        "\n6. Сохранить список",
        "\n7. Записать строку",
        "\n8. Выход",
    )

    inputDictionary = 1

    while True:
        userInput = input("\nВведите: ")
        if userInput == "8":
            print("Завершение работы.")
            break
        elif userInput == "1":
            ab.book()
        elif userInput == "2":
            ab.addBook()
        elif userInput == "3":
            ab.changeBook()
        elif userInput == "4":
            ab.delBook()
        elif userInput == "5":
            ab.searchBook()
        elif userInput == "6":
            ab.saveBook()
        elif userInput == "7":
            ab.recording()

        else:
            print("Что-то пошло не так!")
            break


interaction()
